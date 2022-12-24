import moment from 'moment';

export const DateUtils = {
  parseElapsed: (date: string | undefined) =>
    date ? moment(date).fromNow() : '',
};
