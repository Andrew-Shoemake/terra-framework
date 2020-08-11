import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';

import Button from 'terra-button';
import { DisclosureManagerContext } from 'terra-disclosure-manager';
import ModalManager from 'terra-modal-manager';
import NotificationDialog from 'terra-notification-dialog';

import styles from './example-styles.module.scss';

const cx = classNames.bind(styles);

/**
 * This example file contains three React Components:
 *    - ModalManagerExample - renders a ModalManager and the ModalContainer.
 *    - ModalContainer - provide a button to disclose the ModalContent.
 *    - ModalContent - provides the example showing the Notification Dialog renders over modal content.
 * Typically Terra would recommend breaking these into three files, but we condense them to one for documentation purposes.
 */

const ModalContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NotificationDialog
        variant="hazard-high"
        isOpen={isOpen}
        dialogTitle="Use a Title That Relates Directly to The Choices"
        startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
        acceptAction={{
          text: 'accept',
          onClick: handleCloseModal,
        }}
        rejectAction={{
          text: 'reject',
          onClick: handleCloseModal,
        }}
        buttonOrder="acceptFirst"
        emphasizedAction="accept"
      />
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

const ModalContainer = () => {
  const disclosureManager = useContext(DisclosureManagerContext);

  const disclose = () => {
    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: 'ModalContent',
        title: 'Example Modal Content',
        component: <ModalContent />,
      },
    });
  };

  return (
    <Button text="Trigger Modal" onClick={disclose} />
  );
};

const ModalManagerExample = () => (
  <div className={cx('example-wrapper')}>
    <ModalManager>
      <ModalContainer />
    </ModalManager>
  </div>
);

export default ModalManagerExample;
