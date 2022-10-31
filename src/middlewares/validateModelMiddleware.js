export default function validateModelMiddleware(model) {
  return (req, res, next) => {
    const validation = model.validate(req.body);
    if (validation.error) return res.status(422).send(validation.error.message);

    next();
  };
}
