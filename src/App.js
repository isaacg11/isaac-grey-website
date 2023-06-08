import * as React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import './App.css';

function App() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div className="App">

      {/* hero section */}
      <Grid container spacing={2} style={{ background: '#000', color: '#fff' }}>
        <Grid item xs={0} sm={0} md={4} lg={4}>
          <img alt="profile" className="hide-on-sm" src={'https://isaac-grey.s3.us-west-2.amazonaws.com/bw.jpeg'} style={{ width: '100%', height: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1 className="name">Isaac Grey</h1>
            <div style={{ display: 'flex', marginRight: 20 }}>
              <a style={{ marginRight: 20, textDecoration: 'none', color: '#fff' }} href="#experience">Experience</a>
              <a style={{ marginRight: 20, textDecoration: 'none', color: '#fff' }} href="#referrals">Referrals</a>
              <a style={{ textDecoration: 'none', color: '#fff' }} href="#contact">Contact</a>
            </div>
          </div>
          <h1 className="slogan">
            <span style={{ opacity: 0.5 }}>C</span>rafting Inn<span style={{ color: '#0066ff' }}>o</span>vative S<span style={{ color: '#0066ff' }}>o</span>luti<span style={{ color: '#0066ff' }}>o</span>ns thr<span style={{ color: '#0066ff' }}>o</span>ugh C<span style={{ color: '#0066ff' }}>o</span>de.
          </h1>
          <div style={{ padding: '0px 50px' }}>
            <p style={{ fontSize: 25 }}>Welcome to my portfolio website! I'm a fullstack software developer passionate about creating impactful applications. With expertise in front-end and back-end technologies, I craft elegant code for responsive interfaces and robust server-side logic. Explore my projects and let's connect to collaborate on innovative software solutions.</p>
          </div>
        </Grid>
      </Grid>

      {/* experience */}
      <Grid container spacing={2} id="experience">
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: 50 }}>
          <h1 style={{ textAlign: 'center', marginTop: 50 }}>Career <span style={{ color: '#00000066' }}>Experience</span></h1>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
              >
                10/22 - 4/23
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'white' }}>
                  <img alt="kahani" src="https://isaac-grey.s3.us-west-2.amazonaws.com/kahani.jpeg" style={{ borderRadius: '50%', width: 50, height: 50 }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Kahani
                </Typography>
                <Typography>
                  Sr. Software Engineer with the Kahani software team to help build a web platform that helped brand’s re-purpose their social content on their Shopify store.
                  Technologies: HTML, CSS, React, TypeScript, GraphQL, RESTful APIs, Go, Postgresql, Netlify, AWS.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
              >
                7/21 - 8/22
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'white' }}>
                  <img alt="snapchat" src="https://isaac-grey.s3.us-west-2.amazonaws.com/snapchat.jpeg" style={{ borderRadius: '50%', width: 50, height: 50 }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Snapchat
                </Typography>
                <Typography>Sr. Software Engineer with the Snapchat AR team working on Snap’s B2B web platform for managing brand’s 3D experiences within advertisements. Technologies: HTML, CSS, React, TypeScript, GraphQL, RESTful APIs, Node, Express, Postgresql, AWS, Docker, Kubernetes.</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
              >
                2/20 - 7/21
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'white' }}>
                  <img alt="vertebrae" src="https://isaac-grey.s3.us-west-2.amazonaws.com/vertebrae.jpeg" style={{ borderRadius: '50%', width: 50, height: 50 }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Vertebrae
                </Typography>
                <Typography>Software Engineer with the Vertebrae software team to help build a web platform that helped e-commerce brands create 3D shopping experiences. Technologies: HTML, CSS, React, Vue, TypeScript, RESTful APIs, Node, Express, Postgresql, AWS, Redis, Docker, Kubernetes.</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
              >
                9/18 - 1/20
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'white' }}>
                  <img alt="clicktool" src="https://isaac-grey.s3.us-west-2.amazonaws.com/clicktool.jpeg" style={{ borderRadius: '50%', width: 50, height: 50 }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Clicktool
                </Typography>
                <Typography>Software Engineer with Clicktools software team to help build marketing analytics platform. Technologies: HTML, CSS, React, Next, D3, Redux, RESTful APIs, Node, Express, MariaDB, AWS.</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
              >
                8/16 - 9/18
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'white' }}>
                  <img alt="woz-u" src="https://isaac-grey.s3.us-west-2.amazonaws.com/woz-u.jpeg" style={{ borderRadius: '50%', width: 50, height: 50 }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Woz-U
                </Typography>
                <Typography>Coding Instructor for full-stack programming workshops. Classes were focused on the MEAN and MERN stacks. Provided student support, facilitated lectures, and taught various technologies.</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
              >
                9/15 - 7/16
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'white' }}>
                  <img alt="stamplay" src="https://isaac-grey.s3.us-west-2.amazonaws.com/stamplay.png" style={{ borderRadius: '50%', width: 50, height: 50 }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Stamplay
                </Typography>
                <Typography>Support Engineer with the Stamplay platform team to help developers build serverless back-end web applications.</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>

      {/* referrals */}
      <Grid container spacing={2} style={{ background: '#f8f8f8' }} id="referrals">
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 50 }}>
          <h1 style={{ textAlign: 'center', marginTop: 25, marginBottom: 25 }}>Referrals</h1>
          <Grid container spacing={2} style={{ flexWrap: 'wrap' }}>
            <Grid item xs={12} sm={12} md={4} lg={4} style={{ display: 'flex' }}>
              <Card style={{ padding: 25, flex: 1, border: '5px solid #0066ff', borderRadius: 15 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div>
                    <img alt="kyle" src="https://isaac-grey.s3.us-west-2.amazonaws.com/kyle.jpeg" style={{ width: 50, height: 50, borderRadius: '50%' }} />
                    <h4 style={{ marginBottom: 0 }}>Kyle R.</h4>
                  </div>
                </div>
                <p>Isaac was a member of my team for over two years, and it was a pleasure to work with him. He played a significant role in the success of our organization over that time and always approached his work with a positive attitude. I was very impressed with his professional growth during our short time working together, and always appreciated his thoughtful contributions to discussions as well as his detail-oriented mindset. Any team would be lucky to have Isaac!</p>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} style={{ display: 'flex' }}>
              <Card style={{ padding: 25, flex: 1, border: '5px solid #0066ff', borderRadius: 15 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div>
                    <img alt="chuck" src="https://isaac-grey.s3.us-west-2.amazonaws.com/chuck.jpeg" style={{ width: 50, height: 50, borderRadius: '50%' }} />
                    <h4 style={{ marginBottom: 0 }}>Chuck H.</h4>
                  </div>
                </div>
                <p>I worked directly with Isaac for a little over a year as the principle designer of the software we were creating. Isaac and I together solved some of our most abstract challenges. My favorite problem we solved was when we needed to visualize a vast amount of data and create a UI that did this effectively. We started by trying to combine technologies like React, D3, and SVG. When D3 gave us trouble, we threw out D3 altogether refactored the whole thing using D3, React, some tricky math and creative problem solving. Isaac is also a great guy and fun to work with.</p>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} style={{ display: 'flex' }}>
              <Card style={{ padding: 25, flex: 1, border: '5px solid #0066ff', borderRadius: 15 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div>
                    <img alt="kelsey" src="https://isaac-grey.s3.us-west-2.amazonaws.com/kelsey.jpeg" style={{ width: 50, height: 50, borderRadius: '50%' }} />
                    <h4 style={{ marginBottom: 0 }}>Kelsey T.</h4>
                  </div>
                </div>
                <p>I had the privilege of being on the same team with Isaac at a small startup in its very early stages. Isaac is such a positive force and an extremely talented software engineer. He worked tirelessly to reduce product friction, meet the demands of our customers, and steer our software towards a growing future. His excellent communication skills allowed him to more deeply understand the challenges that the customer facing portion of the business faced and to contribute to critical team discussions in an earnest manner. I cannot recommend him highly enough.</p>
              </Card>
            </Grid>
          </Grid>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, marginBottom: 50 }}>
            <div className="hide-on-xs" style={{ width: '100%', textAlign: 'center' }}>
              <Button style={{ backgroundColor: '#0066ff', color: '#fff', borderRadius: '20px', width: '25%' }} endIcon={<ArrowForwardIcon />} onClick={() => window.location.href = 'https://www.linkedin.com/in/isaacgrey/details/recommendations/?detailScreenTabIndex=0'}>View All</Button>
            </div>
            <div className="show-on-xs" style={{ width: '100%' }}>
              <Button style={{ backgroundColor: '#0066ff', color: '#fff', borderRadius: '20px', width: '100%' }} endIcon={<ArrowForwardIcon />} onClick={() => window.location.href = 'https://www.linkedin.com/in/isaacgrey/details/recommendations/?detailScreenTabIndex=0'}>View All</Button>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* side project */}
      <Grid container spacing={2} style={{ background: '#fff', paddingBottom: 50 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 50 }}>
          <h1 style={{ textAlign: 'center', marginTop: 25, marginBottom: 50 }}>Latest <span style={{ color: '#00000066' }}>Side Project</span></h1>
          <Grid container spacing={2}>
            <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
            <Grid item xs={9} sm={9} md={4} lg={4}>
              <h2>Yarden</h2>
              <p>Yarden is a mobile app that connects homeowners to gardeners in their area. Here's how it works: A customer uses the app to book a gardener, and the gardener uses the app to report what's going on in the garden. Buit with React Native, Redux, Express, Node, and MongoDB.</p>
              <Button style={{ backgroundColor: '#0066ff', color: '#fff', marginRight: 15, borderRadius: '20px', padding: '5px 15px' }} onClick={() => window.location.href = 'https://www.yardengarden.com/'}>View Web</Button>
              <Button style={{ backgroundColor: '#fff', color: '#000', borderRadius: '20px', padding: '5px 15px' }} onClick={() => window.location.href = 'https://apps.apple.com/us/app/yarden/id1626672979'}>View App</Button>
            </Grid>
            <Grid item xs={0} sm={0} md={5} lg={5}>
              <Card>
                <img alt="side project" className="hide-on-sm" src="https://isaac-grey.s3.us-west-2.amazonaws.com/homepage.png" style={{ width: '100%' }} />
              </Card>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* contact */}
      <Grid container spacing={2} style={{ background: '#f8f8f8', textAlign: 'center' }} id="contact">
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 50 }}>
          <h1 style={{ textAlign: 'center', marginTop: 25, marginBottom: 50 }}>Contact <span style={{ color: '#00000066' }}>Information</span></h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MailOutlineOutlinedIcon /><p style={{ marginLeft: 5 }}><b>EMAIL</b></p>
              </div>
              <p style={{ marginTop: 0 }}>isaac.j.grey@gmail.com</p>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PhoneIphoneOutlinedIcon /><p style={{ marginLeft: 5 }}><b>PHONE NUMBER</b></p>
              </div>
              <p style={{ marginTop: 0 }}>(661) 238-5889</p>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LinkOutlinedIcon /><p style={{ marginLeft: 5 }}><b>LINKEDIN</b></p>
              </div>
              <p style={{ marginTop: 0 }}>www.linkedin.com/in/isaacgrey</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* footer */}
      <div style={{ padding: 15, textAlign: 'center', color: '#fff', backgroundColor: '#0066ff' }}>
        © Isaac Grey {year}
      </div>

    </div>
  );
}

export default App;
