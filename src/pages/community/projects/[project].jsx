import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {
  ProjectAndPropertiesContainer,
  ProjectDetailsContainer,
  ProjectProperties,
  ProjectsContainer,
} from './projects-styles';
import { connectToDatabase } from '../../../utils/mongodb';

import CodeInputContainer from '../../../layouts/components/CodeInputContainer';
import MacTopBar from '../../../layouts/components/MacTopBar';
import TextInput from '../../../layouts/components/Input';
import TextArea from '../../../layouts/components/TextArea';

const CodeMirror = dynamic(
  () => {
    import('codemirror/mode/xml/xml');
    import('codemirror/mode/javascript/javascript');
    import('codemirror/mode/css/css');
    import('codemirror/mode/go/go');
    import('codemirror/mode/python/python');
    import('codemirror/mode/php/php');
    import('codemirror/mode/r/r');
    import('codemirror/mode/sql/sql');
    import('codemirror/theme/material.css');
    import('codemirror/theme/dracula.css');
    import('codemirror/theme/cobalt.css');
    import('codemirror/theme/mdn-like.css');
    import('codemirror/theme/monokai.css');
    import('codemirror/theme/nord.css');
    import('codemirror/theme/oceanic-next.css');
    import('codemirror/theme/rubyblue.css');
    import('codemirror/theme/solarized.css');
    return import('react-codemirror2').then((mod) => mod.Controlled);
  },
  { ssr: false }
);

const LANGUAGES = {
  xml: 'HTML',
  javascript: 'Javascript',
  css: 'CSS',
  go: 'Go',
  python: 'Python',
  php: 'PHP',
  r: 'R',
  sql: 'SQL',
};

const Project = ({ projectData }) => {
  return (
    <>
      <Head>
        <title>AluraDev - Comunidade</title>
      </Head>
      <ProjectsContainer>
        <ProjectAndPropertiesContainer>
          <div
            style={{
              background: projectData.projectColor,
              padding: '2rem',
              borderRadius: '8px',
              overflowX: 'auto',
              height: 'fit-content',
              width: '100%',
            }}
          >
            <CodeInputContainer>
              <MacTopBar />

              {CodeMirror && (
                <CodeMirror
                  value={projectData.inputCode}
                  options={{
                    readOnly: 'nocursor',
                    lineWrapping: true,
                    mode: projectData.language,
                    theme: projectData.projectTheme,
                    scrollbarStyle: null,
                    viewportMargin: Infinity,
                  }}
                />
              )}
            </CodeInputContainer>
          </div>

          <ProjectDetailsContainer>
            <h4>AUTOR</h4>
            <div className="user-profile">
              <img src={projectData.userAvatar} alt="Avatar" />
              <p>{projectData.userName}</p>
            </div>
            <h4>DETALHES</h4>

            <ProjectProperties>
              {LANGUAGES[projectData.language]}
            </ProjectProperties>
            <ProjectProperties>{projectData.projectTitle}</ProjectProperties>
            <ProjectProperties>
              {projectData.projectDescription}
            </ProjectProperties>
          </ProjectDetailsContainer>
        </ProjectAndPropertiesContainer>
      </ProjectsContainer>
    </>
  );
};

export default Project;

export async function getServerSideProps({ query }) {
  const { db } = await connectToDatabase();
  const ObjectId = require('mongodb').ObjectID;
  const data = await db
    .collection('projects')
    .findOne({ _id: new ObjectId(query.project) });

  const projectData = JSON.parse(JSON.stringify(data));

  return {
    props: { projectData },
  };
}
