import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, ModuleDetail, QueryResult } from '../components';

const GET_TRACK = gql`
  query Track($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
        trackId
        authorId
        topic
        content
        videoUrl
      }
    }
  }
`;

const Module = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, { variables: { trackId } });

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.track?.modules[0]} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
