export const queryToNumber = (query: any, arrayOfFields: string[]) => {
  let retQuery: any = {};

  for (const key in query) {
    if (arrayOfFields.includes(key)) retQuery = { ...retQuery, [key]: parseInt(query[key]) };
    else retQuery = { ...retQuery, [key]: query[key] };
  }

  return retQuery;
};
