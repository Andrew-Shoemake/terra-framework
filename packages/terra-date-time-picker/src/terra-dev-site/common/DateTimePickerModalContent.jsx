import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import Field from 'terra-form-field';

// eslint-disable-next-line import/no-unresolved, import/extensions
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';

const ModalContent = (props) => {
  const { disclosureManager } = props;

  return (
    <div className="content-container" style={{ height: '100%', padding: '10px' }}>
      <Field label="Enter Date/Time" htmlFor="modal-picker">
        <DateTimePicker
          value="06-26-2017"
          name="date-time-picker-in-modal"
          dateInputAttributes={{ id: 'modal-picker' }}
        />
      </Field>
      <br />
      <br />
      <Button className="close-disclosure" onClick={disclosureManager.closeDisclosure} text="Close Disclosure" />
    </div>
  );
};

ModalContent.propTypes = {
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(ModalContent);
