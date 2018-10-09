// @flow
import * as React from 'react';
import FileInput from './FileInput';

type Props = {|
  handleFiles: (Blob[]) => mixed,
  multiple: boolean,
|};

/**
 * Component is described here.
 *
 * @example ./examples/FileUploadButton.md
 */
export default class FileUploadButton extends React.Component<Props> {
  static defaultProps = {
    multiple: false,
  };

  render() {
    return (
      <div className="raf-file-upload-button">
        <label htmlFor="raf-file-upload-button">
          <FileInput {...this.props} id="raf-file-upload-button" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </label>
      </div>
    );
  }
}