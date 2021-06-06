import Head from 'next/head';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import CodePreview from './codePreview/CodePreview';
import ProjectInfo from './projectInfo/ProjectInfo';
import { CommunityContainer, CommunityItemContainer } from './community-styles';
import { connectToDatabase } from '../../utils/mongodb';

export default function Community({ projects }) {
  return (
    <>
      <Head>
        <title>AluraDev - Comunidade</title>
      </Head>
      <MainLayout>
        <CommunityContainer>
          {projects &&
            projects.map((project) => (
              <CommunityItemContainer key={project._id}>
                <CodePreview
                  code={project.inputCode}
                  language={project.language}
                  theme={project.projectTheme}
                  color={project.projectColor}
                />
                <ProjectInfo
                  projectTitle={project.projectTitle}
                  projectDescription={project.projectDescription}
                  projectAuthor={project.userName}
                  projectAuthorAvatar={project.userAvatar}
                />
              </CommunityItemContainer>
            ))}
        </CommunityContainer>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const data = await db
    .collection('projects')
    .find({})
    .sort({ _id: -1 })
    .toArray();

  const projects = JSON.parse(JSON.stringify(data));

  return {
    props: { projects },
  };
}
