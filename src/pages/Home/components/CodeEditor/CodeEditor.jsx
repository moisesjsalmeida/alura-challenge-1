import Button from '../../../../layouts/components/Button';
import colors from '../../../../styles/colors';
import {
  CodeEditorContainer,
  CodeInput,
  CodeInputContainer,
} from './codeEditor-styles';

const CodeEditor = () => {
  return (
    <CodeEditorContainer>
      <div
        style={{
          background: '#6BD1FF',
          padding: '2rem',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <CodeInputContainer>
          {/* Mac styled circles */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill={colors.macRed} />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill={colors.macYellow} />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill={colors.macGreen} />
          </svg>
          <CodeInput rows={20} width="100%" />
        </CodeInputContainer>
      </div>
      <Button outlined width="100%">
        Visualizar com o highlight
      </Button>
    </CodeEditorContainer>
  );
};

export default CodeEditor;
