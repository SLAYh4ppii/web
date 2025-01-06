"use client";
import JobDetails1 from '@/components/en/career-details/JobDetails1';
import JobDetails2 from '@/components/en/career-details/JobDetails2';
import JobDetails3 from '@/components/en/career-details/JobDetails3';
import JobDetails4 from '@/components/en/career-details/JobDetails4';
import JobDetails5 from '@/components/en/career-details/JobDetails5';
import JobDetails6 from '@/components/en/career-details/JobDetails6';
import JobDetails7 from '@/components/en/career-details/JobDetails7';
import JobDetails8 from '@/components/en/career-details/JobDetails8';
import { useParams } from 'next/navigation';

enum JobIds {
  JOB_1 = '1',
  JOB_2 = '2',
  JOB_3 = '3',
  JOB_4 = '4',
  JOB_5 = '5',
  JOB_6 = '6',
  JOB_7 = '7',
  JOB_8 = '8',
}

interface JobDetailsProps {
  id: string;
}

const renderJobDetails = ({ id }: JobDetailsProps) => {
  switch (id) {
    case JobIds.JOB_1:
      return <JobDetails1 />;
    case JobIds.JOB_2:
      return <JobDetails2 />;
    case JobIds.JOB_3:
      return <JobDetails3 />;
    case JobIds.JOB_4:
      return <JobDetails4 />;
    case JobIds.JOB_5:
      return <JobDetails5 />;     
    case JobIds.JOB_6:
      return <JobDetails6 />;
    case JobIds.JOB_7:
      return <JobDetails7 />;
    case JobIds.JOB_8:
      return <JobDetails8 />; 
    default:
      return <div>No job details found for ID: {id}</div>;
  }
};

const JobDetailsPage = () => {
  const { id } = useParams();

  if (!id) {
    return <div>No ID provided</div>;
  }

  // Ensure that id is treated as a string
  const jobId = Array.isArray(id) ? id[0] : id;

  return (
    <div>
      {renderJobDetails({ id: jobId })}
    </div>
  );
};

export default JobDetailsPage;
