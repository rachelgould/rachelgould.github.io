$(() => {
  let currentTestimonial = 0;
  
  const testimonials = [
    {
      quote: 'One month into her placement, Rachel identified challenges within the marketing department (ie: collecting and measuring data of marketing qualified leads), and requested a longer-term project to address the issue. With this feedback, Rachel was tasked with implementing an email marketing solution for the organization. Upon completion of her four month co-op term, Rachel successfully implemented a tool that will prove to drastically improve the way data is tracked and reported for the marketing team.',
      person: 'Meghan Hennessey',
      title: 'Content & Communications Manager@Clearpath Robotics'
    },
    {
      quote: 'Rachel quickly demonstrated that we could trust her with complex, time-sensitive and highly important projects as she had the ability to work independently and effectively on every assignment we gave her. She juggled a variety of projects and priorities led by various people on the team with ease, became actively involved in company culture-related activities both during work hours and outside of them, and even gained the respect of senior executives.',
      person: 'Cassandra Jowett',
      title: 'Senior Content Marketing Manager@Influitive'
    },
    {
      quote: 'Rachel was instrumental in implementing Pardot, our marketing automation solution. This involved creating a strategy to successfully onboard the sales team to ensure they not only understood how to use Pardot, but also to ensure the platform became a valuable tool that they could utilize in their day-to-day activities. Rachel executed the implementation with immense attention to detail.',
      person: 'Evan Little',
      title: 'Director, Demand Generation@Clearpath Robotics'
    },
    {
      quote: 'Rachel is a tremendous asset to any company lucky enough to have her. Most notably Rachel took the initiative to understand our business, our product and our target audience. With this knowledge she developed what we consider to be the most successful event based advocate marketing program to-date, generating high quality leads for Influitive.',
      person: 'Sydney Strader',
      title: 'Senior Customer Strategist@Influitive'
    }, 
    {
      quote: 'Highly motivated and a quick study, Rachel swiftly made herself a linchpin, adding value to a number of key projects. She consistently delivered high-quality work at an impressive output rate. It was a treat to watch her communications and critical thinking skills develop over the course of the semester as she navigated a variety of projects.',
      person: 'Lisa Lambert',
      title: 'Head, Strategic Communications@TRIUMF'
    },
  ];
  let numTestimonials = testimonials.length;
  
  mobileModifications();
  renderCurrentTestimonial();

  $(window).resize(function(event) {
    mobileModifications();
  });

  $('.quote-next').click(function(event) {
    if (currentTestimonial === numTestimonials - 1) {
      currentTestimonial = 0;
    } else {
      currentTestimonial ++;
    }
    renderCurrentTestimonial();
    return currentTestimonial;
  });

  $('.quote-back').click(function(event) {
    if (currentTestimonial === 0) {
      currentTestimonial = numTestimonials - 1;
    } else {
      currentTestimonial --;
    }
    renderCurrentTestimonial();
    return currentTestimonial;
  });

  function navScrolled() {
    $('header').addClass('hidden', 1000, 'swing');
  }

  function navUnScrolled() {
    $('header').removeClass('hidden', 1000, 'swing');
  }

  function windowWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  function mobileModifications() {
    let width = windowWidth()
    if (width > 800) {
      navUnScrolled();
      $(window).scroll(function() {
        if($(window).scrollTop() > 400) {
          navScrolled()
        } else {
          navUnScrolled()
        }
      });
    } else {
      navScrolled();
    }
  }

  function renderCurrentTestimonial() {
    let fullTitle = testimonials[currentTestimonial].title
    let title = fullTitle.substring(0, fullTitle.indexOf("@"));
    let company = fullTitle.substring(fullTitle.indexOf('@') + 1)
    $('#quote-content').empty().html(testimonials[currentTestimonial].quote);
    $('#quote-person').empty().html(testimonials[currentTestimonial].person);
    $('#quote-title').empty().html(
      `${title}<br />${company}`
    );
  }
});