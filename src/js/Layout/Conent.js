import Card from '../components/Card';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import {useEffect, useState} from 'react';
import Detail from '../components/Detail';
import {INITIAL_LOAD, PER_PAGE} from '../utilities/constants';

const Content = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [checkContract, setCheckContract] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const handleSearchTitle = (searchTitle) => {
    setSearchTitle(searchTitle);
  };
  const handleSearchLocation = (searchLocation) => {
    setSearchLocation(searchLocation);
  };
  const handleContract = () => {
    setCheckContract(!checkContract);
  };

  const [data, setData] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [hasLoadMore, setHasLoadMore] = useState(true);
  const [isDetailActive, setIsDetailActive] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (searchTitle || searchLocation || checkContract) {
      const filteredJobs = data.filter((item) => {
        return (
          (item.position.toLowerCase().includes(searchTitle.toLowerCase()) ||
            item.company.toLowerCase().includes(searchTitle.toLowerCase())) &&
          item.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
          item.contract === 'Full Time'
        );
      });
      if (filteredJobs.length < INITIAL_LOAD) {
        setHasLoadMore(false);
      } else {
        setHasLoadMore(true);
      }
      setJobs(filteredJobs);
    } else {
      setJobs(data.slice(0, 9));
    }
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTitle, searchLocation, checkContract]);

  const handleLoadMore = () => {
    if (data.length - jobs.length > 0) {
      setJobs(jobs.concat(data.slice(jobs.length, jobs.length + PER_PAGE)));
      setHasLoadMore(data.length > jobs.length + PER_PAGE);
    } else {
      setHasLoadMore(false);
    }
  };
  const fetchData = async () => {
    const response = await fetch('./data.json');
    console.log(response);
    const data = await response.json();
    setData(data);
    setJobs(data.slice(0, 9));
  };
  const handleShowJob = (jobId) => {
    setCurrentId(jobId);
    setIsDetailActive(true);
  };
  const handleIsDetailActive = () => {
    setIsDetailActive(false);
  };
  return (
    <>
      {!isDetailActive && (
        <SearchBar handleSearchTitle={handleSearchTitle} handleSearchLocation={handleSearchLocation} handleContract={handleContract} />
      )}
      {isDetailActive && <Detail handleIsDetailActive={handleIsDetailActive} {...jobs[currentId - 1]} />}
      <div className="content">{!isDetailActive && jobs?.map((job) => <Card {...job} key={job.id} handleClick={handleShowJob} />)}</div>
      <Button handleLoadMore={handleLoadMore} hasLoadMore={hasLoadMore && !isDetailActive} />
      {isDetailActive && (
        <button onClick={handleIsDetailActive} className="back-button">
          &#8701;
        </button>
      )}
    </>
  );
};
export default Content;
