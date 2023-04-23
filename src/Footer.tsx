import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const socialButtonStyle:any = {
    border: 'none',
    color: 'white'
}

const data = [
    {
        header:"About Us",
        categories:[
            "About Target",
            "Careers",
            "Careers",
            "News & Blog",
            "Target Brands",
            "Bullseye Shop",
            "Target's Coronavirus Response",
            "Sustainability & ESG",
            "Press Center",
            "Advertise with Us",
            "Investors",
            "Affiliates & Partners",
            'Suppliers',
            "TargetPlus"
        ]
    },{
        header:"Help",
        categories:[
            "Target Help",
            "Returns",
            "Track Orders",
            "Recalls",
            "Contact Us",
            "Feedback",
            'Accessibility',
            "Security & Fraud",
            'Team Member Services'
        ]
    },{
        header:"Stores",
        categories:[
            "Find a Store",
            "Clinic",
            "Pharmacy",
            "Optical",
            'More In-Store Services'
        ]
    },{
        header:"Services",
        categories:[
            'Target Circle',
            'RedCard',
            'Target App',
            'Registry',
            'Same Day Delivery',
            'Order Pickup',
            'Drive Up',
            'Free 2-Day Shipping',
            'Shipping & Delivery',
            'More Services'
        ]
    },
]
const Footer = () => {
  return (
    <div>
        <footer>
    <div className="footer-top">
      <div className="footer-links">
        {
            data.map((el:any)=>{
                return (
                    <ul key={el.header}>
                        <span className='footerHeader'>{el.header}</span>
                        {
                            el.categories.map((category:any)=><li key="category"><a href="#">{category}</a></li>)
                        }              
                    </ul>
                );
            })
        }
      </div>
    </div>
    <div className="footer-bottom footerBar">
      <div className="footer-social">
      <section className="mb-4 ">
        <a className="btn btn-floating m-1" href="#!" role="button"><PinterestIcon style={socialButtonStyle}/></a>
        <a className="btn btn-floating m-1" href="#!" role="button"><FacebookOutlinedIcon style={socialButtonStyle}/></a>
        <a className="btn btn-floating m-1" href="#!" role="button"><InstagramIcon style={socialButtonStyle}/></a>
        <a className="btn btn-floating m-1" href="#!" role="button"><TwitterIcon style={socialButtonStyle}/></a>
        <a className="btn btn-floating m-1" href="#!" role="button"><YouTubeIcon style={socialButtonStyle}/></a>
        <a className="btn btn-floating m-1" href="#!" role="button"><GoogleIcon style={socialButtonStyle}/></a>
      </section>
      </div>
      <div className="footer-text">
        <p>Terms</p>
        <p>CA Supply Chain</p>
        <p>Privacy</p>
        <p>CA Privacy Rights</p>
        <p>Your Privacy Choices - CA</p>
        <p>Interest Based Ads</p>
        <p>TM & © 2023 Target Brands, Inc.</p>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer