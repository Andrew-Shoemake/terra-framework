import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import Image from 'terra-image';
import classNames from 'classnames';
import ThemeContext from 'terra-theme-context';
import classNamesBind from 'classnames/bind';
import Placeholder from 'terra-application-name/lib/terra-dev-site/doc/common/Placeholder';
import { ApplicationHeaderName } from 'terra-application-name';
import demoColors from '../../test/application-name/demoStyles.module.scss';
import styles from './ApplicationHeaderNameStandard.module.scss';

const cx = classNamesBind.bind(demoColors);
const cy = classNamesBind.bind(styles);
const ApplicationHeaderNameStandard = () => {
  const theme = React.useContext(ThemeContext);
  const demoClassName = classNames(cx(
    'demo-background-color',
    theme.className,
  ));
  return (
    <ApplicationHeaderLayout
      className={cy('demo-size')}
      logo={(
        <ApplicationHeaderName
          title="App-Name"
          accessory={<Image alt="Terra Logo" variant="rounded" src="https://github.com/cerner/terra-framework/raw/main/terra.png" className={cx('demo-image-container')} isFluid />}
          className={demoClassName}
        />
      )}
      extensions={<Placeholder text="Extensions" type="header-extensions" />}
      navigation={<Placeholder text="Content" type="default" />}
      utilities={<Placeholder text="Utiltities" type="utiltities" />}
    />
  );
};

export default ApplicationHeaderNameStandard;
