import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DaysBar from '../../components/DaysBar';

import ProgramsDashboard from '../../components/ProgramsDashboard';
import { loadEPG } from '../../actions';

export default () => {
  const dispatch = useDispatch();
  const { dates } = useSelector((state) => state.main.schedule);
  useEffect(() => {
    dispatch(loadEPG());
  }, []);

  return (
    <>
      <DaysBar {...{ dates }} />
      <ProgramsDashboard></ProgramsDashboard>
    </>
  );
};
