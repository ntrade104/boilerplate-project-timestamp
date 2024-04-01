const isValidDate = (date) => {
  return !isNaN(new Date(date));
};

exports.getTime = (req, res) => {
  const inDate = req.params.date;
   
  if(Number(inDate)){
    const date = Number(inDate)
    const utc = new Date(date).toLocaleDateString();
    const unix = new Date(date).getTime();

    res.status(200).json({
      unix,
      utc
    });
  }else
  if (isValidDate(inDate)) {
    const utc = new Date(inDate).toLocaleDateString();
    const unix = new Date(inDate).getTime();

    res.status(200).json({
      unix,
      utc
    });
  }else{
    res.status(400).json({
        status: 'fail',
        message: 'invalid Date'
    })
  }
};

exports.getDefaultTime = (req, res) => {
     
  res.status(200).json({

    host: `${req.protocol}://${req.get('host')}`,
    unix: req.unix,
    utc: req.utc,
  });
};
