import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/SearchContainer';
import { FormRow, FormRowSelect } from '../components/index';
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice';
const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((state) => state.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          <FormRow
            type={'text'}
            name={'search'}
            value={search}
            handleChange={handleSearch}
          />
          {/* status search */}
          <FormRowSelect
            name={'searchStatus'}
            labelText={'status'}
            value={searchStatus}
            list={['all', ...statusOptions]}
            handleChange={handleSearch}
          />
          {/* type search */}
          <FormRowSelect
            name={'searchType'}
            labelText={'type'}
            value={searchType}
            list={['all', ...jobTypeOptions]}
            handleChange={handleSearch}
          />
          {/* sort */}
          <FormRowSelect
            name={'sort'}
            value={sort}
            list={sortOptions}
            handleChange={handleSearch}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filter
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
