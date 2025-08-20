import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectProgress,
  selectErrorCount,
} from '../../../../app/store/anketaFormReducer/anketaFormSlice';

import * as S from './ProgressIndicator.styles';

export const ProgressIndicator = () => {
  const progress = useSelector(selectProgress);
  const errorCount = useSelector(selectErrorCount);

  return (
    <S.ProgressContainer>
      <S.ProgressText>
        Прогресс заполнения: {Math.round(progress)}%
      </S.ProgressText>
      <S.ProgressBar>
        <S.ProgressFill progress={progress} />
      </S.ProgressBar>

      <S.ProgressText>Количество ошибок: {errorCount}</S.ProgressText>
      <S.ErrorBar>
        <S.ErrorFill errorCount={errorCount} />
      </S.ErrorBar>
    </S.ProgressContainer>
  );
};
