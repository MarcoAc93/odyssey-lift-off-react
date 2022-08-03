import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

const GET_TRACK = gql`
  query Query($trackId: ID!) {
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

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, { variables: { trackId } });

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
