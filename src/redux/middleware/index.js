
export function theMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      return next(action);
    };
  };
}