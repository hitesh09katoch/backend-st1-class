exports.paginateComments = (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
  
    req.skip = (page - 1) * pageSize;
    req.limit = pageSize;
  
    next();
  };
  