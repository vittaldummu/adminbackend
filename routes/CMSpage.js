const express = require('express');
const router = express.Router(); 
const passport = require('passport');

const Feedback = require("../models/feedback");
const Contact = require("../models/contact");
const About = require("../models/about");
const FAQ = require("../models/faq");
const Terms = require("../models/terms");
const How = require("../models/how_Works");
const Privacy = require("../models/privacy");

require('../config/passport')(passport);

router.post("/feedback", (req,res) =>{
  if (!req.body.rate_experience || !req.body.comment) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  const feedback = new Feedback({
    rate_experience : req.body.rate_experience,
    comment : req.body.comment
  });
  console.log(feedback);
  feedback  
  .save()
  .then((data) => {
    return res.status(200).send({
      success: true,
      comment: data.comment,
      rate_experience : data.rate_experience,
      _id: data._id
    });
  })
  .catch((err) => {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating Feedback form."
    });
  });
});

router.get('/feedback', (req, res) => {
  Feedback.find()
      .then((body) => {
        return res.send({body: body});
      })
      .catch((err) => {
        return res.status(500).send({
          message: err.message || "Error Occured",
        });
      });
});

router.post("/contactUs", (req,res) =>{
  if (!req.body.email || !req.body.name || !req.body.message) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  const contact = new Contact({
    email : req.body.email,
    name : req.body.name,
    message : req.body.message
  });
  console.log(contact);
  contact  
  .save()
  .then((data) => {
    return res.status(200).send({
      success: true,
      name: data.name,
      email: data.email,
      message: data.message
    });
  })
  .catch((err) => {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating ContactUs form."
    });
  });
});

router.get('/contactUs', (req, res) => {
  Contact.find()
      .then((body) => {
        return res.send({body: body});
      })
      .catch((err) => {
        return res.status(500).send({
          message: err.message || "Error Occured",
        });
      });
});

router.post("/aboutUs", (req,res) =>{
  console.log(req.body);
  if (!req.body.header || !req.body.description) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  const aboutUs = new About({
    header : req.body.header,
    description : req.body.description
  });
  aboutUs  
  .save()
  .then((data) => {
    return res.status(200).send({
      success: true,
      data
    });
  })
  .catch((err) => {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating AboutUs query."
    });
  });
});

router.get('/aboutUs', (req, res) => {
  About.find()
      .then((data) => {
        return res.status(200).send({
          success: true,
          data,
          image: [
            {
              img: "https://homepages.cae.wisc.edu/~ece533/images/girl.png",
              name: "Ramesh",
              position: "CEO"
            },
            {
              img: "https://homepages.cae.wisc.edu/~ece533/images/watch.png",
              name: "Marvin",
              position: "HR"
            },
            {
              img: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
              name: "Ankit",
              position: "CO-Founder"
            }
          ]
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: err.message || "Error Occured",
        });
      });
});

router.post("/faq", (req,res) =>{
  if (!req.body.header || !req.body.description) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  const faq = new FAQ({
    header : req.body.header,
    description : req.body.description
  });
  console.log(faq);
  faq.save()
       .then((data) => {
        return res.status(200).send({
        success: true,
        header: data.header,
        description: data.description
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating FAQ form."
      });
    });
});

router.get('/faq', (req, res) => {
  FAQ.find()
      .then((data) => {
        return res.status(200).send({
          success: true,
          data
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: err.message || "Error Occured",
        });
      });
});


router.post("/privacy_policy", (req,res) =>{
  if (!req.body.header || !req.body.description) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  const privacy = new Privacy({
    header : req.body.header,
    description : req.body.description
  });
  console.log(privacy);
  privacy.save()
       .then((data) => {
        return res.status(200).send({
        success: true,
        header: data.header,
        description: data.description
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating FAQ form."
      });
    });
});

router.get('/privacy_policy', (req, res) => {
  Privacy.find()
      .then((data) => {
        return res.status(200).send({
          success: true,
          data
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: err.message || "Error Occured",
        });
      });
});


router.post("/how_it_works", (req,res) =>{
  if (!req.body.header || !req.body.description) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  const how = new How({
    header : req.body.header,
    description : req.body.description
  });
  console.log(how);
  how.save()
       .then((data) => {
        return res.status(200).send({
        success: true,
        header: data.header,
        description: data.description
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating FAQ form."
      });
    });
});

router.get('/how_it_works', (req, res) => {
  How.find()
      .then((data) => {
        return res.status(200).send({
          success: true,
          data
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: err.message || "Error Occured",
        });
      });
});

router.post("/terms_&_conditions", (req,res) =>{
  if (!req.body.header || !req.body.description) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  const terms = new Terms({
    header : req.body.header,
    description : req.body.description
  });
  console.log(terms);
  terms.save()
       .then((data) => {
        return res.status(200).send({
        success: true,
        header: data.header,
        description: data.description
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating FAQ form."
      });
    });
});

router.get('/terms_&_conditions', (req, res) => {
  Terms.find()
      .then((data) => {
        return res.status(200).send({
          success: true,
          data
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: err.message || "Error Occured",
        });
      });
});

module.exports = {
    CMScontroller: router
}