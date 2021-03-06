import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import ActionFooter from 'terra-action-footer';
import NotificationDialog from 'terra-notification-dialog';
import DialogModal from '../../../DialogModal';

const clickOK = () => {
  console.log('You clicked OK'); // eslint-disable-line no-console
};

class DefaultDialogModal extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      isNotificationDialogOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenNotificationDialog = this.handleOpenNotificationDialog.bind(this);
    this.handleCloseNotificationDialog = this.handleCloseNotificationDialog.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  handleOpenNotificationDialog() {
    this.setState({ isNotificationDialogOpen: true });
  }

  handleCloseNotificationDialog() {
    this.setState({ isNotificationDialogOpen: false });
  }

  render() {
    const text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.',
      'Integer congue feugiat ultricies.',
      ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.',
      'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.',
      ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.',
      'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.',
      'Nam vehicula, arcu vitae egestas porttitor,',
      'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];
    return (
      <div>
        <DialogModal
          ariaLabel="Dialog Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          header={<ActionHeader title="Action Header used here" onClose={this.handleCloseModal} />}
          footer={<ActionFooter start="Footer Goes here" />}
        >
          <p>{text}</p>
          {this.state.isNotificationDialogOpen && (
            <NotificationDialog
              variant="hazard-high"
              dialogTitle="Make sure that the title relates directly to the choices."
              startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
              acceptAction={{
                text: 'OK',
                onClick: clickOK,
              }}
              rejectAction={{
                text: 'Close',
                onClick: this.handleCloseNotificationDialog,
              }}
            />
          )}
          <Button text="Trigger NotificationDialog" onClick={this.handleOpenNotificationDialog} />
          <p>{text}</p>
        </DialogModal>
        <Button id="trigger-dialog-modal" text="Trigger Dialog Modal" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default DefaultDialogModal;
