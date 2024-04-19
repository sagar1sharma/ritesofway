import "./Home.css";
import MyCarousel from "../components/MyCarousel";
import MyCarousel2 from "../components/Carouesl2";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const headerItems = ["Home", "About", "Quirky Weddings", "Namings", "Dog Celebrations", "Living funerals", "Read the blogs", "Contact Carolyns"];
  const navigate = useNavigate();

  function handleClick(item){
    const url = "/"+item
    navigate(url)
  }
  return (
    <div className="app">
      <div className="mainHeader">
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{margin: "20px"}} className="logo">
            <img src="https://static.wixstatic.com/media/88810b_32c11a9176f24b99b4d7df46bd8f8976~mv2.jpg/v1/fill/w_321,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/updated%20RoW%20Elegant%20Signature%20april%2024_edited.jpg"></img>
          </div>
          <div style={{flexDirection: "coloumn", marginRight: "20px"}}>
            <div className="header">
              {headerItems.map((item) => (
                <div onClick={() => handleClick(item)} className="headerItem">{item}</div>
              ))}
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div className="moto">Carolyn the Celebrant <br></br>at Rites of Way <br></br> <div className="motoB">'I will tell YOUR story'</div></div>
              <div>
                <img className="social-logos" src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png"></img>
                <img className="social-logos" style={{width: "120px"}} src="https://timeanalyticssoftware.com/wp-content/uploads/2022/01/f-share.jpg"></img>
                <img className="social-logos" src="https://cdn.shopify.com/app-store/listing_images/1fae8fb9a2613399a599abfd0846d88f/icon/COGVntj0lu8CEAE=.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <MyCarousel></MyCarousel>

        <div className="testament">
          <div className="moto" style={{margin: "0"}}>LET'S CREATE YOUR PERFECT CEREMONY <br></br> FOR YOUR PERFECT DAY</div>
          <h2 style={{textAlign: "center"}}>''Life is a journey full of milestones and memories.''</h2>
          <div style={{display: "flex", width: "80rem", justifyContent: "space-evenly", margin: "auto"}}>
            <img src="https://static.wixstatic.com/media/88810b_272d567156a84ac192f70d00bbbebf3e~mv2.jpg/v1/fill/w_267,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/me%20fun.jpg"></img>
            <div className="myTxt" style={{textAlign: "center", marginLeft: "5px"}}>I’m Carolyn, a Bedfordshire Master Celebrant storyteller who loves to help people celebrate their special moments in their own way. <br></br><br></br>Whether it’s a wedding, a vow renewal, a naming ceremony, a living funeral, a dog celebration of life , I’m here to create a personalised and meaningful and perfect ceremony that reflects your story, your values, about who you love.</div>
          </div>
          <br></br>
          <div style={{display: "flex", width: "80rem", justifyContent: "space-evenly", margin: "auto"}}>
          <img src="https://static.wixstatic.com/media/88810b_076ad5c457c6483aa87c53450711fcf6~mv2.jpg/v1/fill/w_251,h_276,fp_0.50_0.50,q_90,enc_auto/88810b_076ad5c457c6483aa87c53450711fcf6~mv2.jpg"></img> 
            <div className="myTxt" style={{textAlign: "center", marginLeft: "5px"}}>I’m a flexible and friendly storyteller trained and accredited by the Academy of Modern Celebrancy. If you are unsure what a celebrant does please read my blogs here I’m also happy to travel to any location of your choice, and I can cater to any theme, style, or budget. No dream is too amazing for me!<br></br><br></br> If you need a friendly, professional, and creative celebrant who will make your celebration truly special, then look no further. Please read my blogs for inspiration and useful information. Book a complimentary free call with me today on Calendly and let’s start planning your perfect day.”</div>
          </div>
        </div>

        <div className="testament2">
        <div style={{display: "flex", width: "80rem", justifyContent: "space-evenly", margin: "auto", alignItems: "center"}}>
          <div>
            <div className="moto">Let’s celebrate your love story with an unforgettable wedding or a renewal of wedding vows!</div>
            <div className="myTxt" style={{textAlign: "center", marginLeft: "5px", marginRight: "5px"}}>Carolyn the Celebrant is a Bedfordshire-based wedding and vow renewal celebrant, who can travel,  with the view of curating quirky, fun, unique, tailored and heartfelt ceremonies that reflect the special couples and their beautiful wedding celebrations. <br></br><br></br>Carolyn helps couples and families celebrate key moments of their lives with heartfelt special touches and fun moments. She helps those who need a celebrant at short notice, who want a memorable ceremony and those who wish to include their dogs, creating memories that will last a lifetime. <br></br><br></br> Imagine honouring your journey as a couple, sharing your love story with your guests and affirming your commitment to each other... Are you ready to get started? Contact me today and let’s make your perfect wedding and vow renewal a reality! 🥂</div>
          </div>
          <img src="https://static.wixstatic.com/media/88810b_9fcc269f8cbc479692745ae334871ce8~mv2.jpg/v1/fill/w_535,h_879,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/88810b_9fcc269f8cbc479692745ae334871ce8~mv2.jpg"></img> 
        </div>
        <br></br>
        <div style={{display: "flex", width: "80rem", justifyContent: "space-evenly", margin: "auto", alignItems: "center"}}>
          <img src="https://static.wixstatic.com/media/88810b_d902412b9a414fcc930074a4816bc104~mv2.jpg/v1/fill/w_503,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/lgbqt%2B%20mums%20with%20baby.jpg"></img> 
          <div>
            <div className="myTxt" style={{textAlign: "center", marginLeft: "5px", marginRight: "5px"}}>I will create a <br></br>heart warming Naming Ceremony, <br></br>where you will officially name your child <br></br>in front of your loved ones</div>
          </div>
        </div>
        <br></br>
        <div style={{display: "flex", width: "80rem", justifyContent: "space-evenly", margin: "auto", alignItems: "center"}}>
          <div>
            <div className="myTxt" style={{textAlign: "center", marginLeft: "5px", marginRight: "5px"}}>I will craft the living funeral ceremony of your choosing for a memorable and fun farewell.</div>
          </div>
          <img src="https://static.wixstatic.com/media/88810b_28bb4c2bc746404fb47c8d4b623a7a30~mv2.jpg/v1/fill/w_752,h_494,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/88810b_28bb4c2bc746404fb47c8d4b623a7a30~mv2.jpg"></img> 
        </div>
        <br></br>
        <div style={{display: "flex", width: "80rem", justifyContent: "space-evenly", margin: "auto", alignItems: "center"}}>
          <img src="https://static.wixstatic.com/media/88810b_20436a6ad5e9486997e35e5d0bef182a~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ted_edited_edited.jpg"></img> 
          <div>
            <div className="myTxt" style={{textAlign: "center", marginLeft: "5px", marginRight: "5px"}}>We will involve your pets in your ceremonies since they are part of the family . We will hold ceremonies to honour your pets so you can express your love and thanks for them.</div>
          </div>
        </div>
        <br></br>
        </div>

        <div style={{backgroundColor: "#9D8189", margin: "0"}}>
          <div style={{padding: "2rem", color: "white", margin: "0"}} className="moto">WHAT OUR CLIENTS SAY</div>
        </div>
        <MyCarousel2> </MyCarousel2>

        <div>
          <div style={{textAlign: "center", display: "flex", justifyContent: "space-around", height: "6rem", padding: "1rem"}}>
            <img src="https://static.wixstatic.com/media/88810b_f89aee4f2ecd416abed6ce48a7185376~mv2.png/v1/fill/w_215,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/gift%20a%20tree.png"></img>
            <img src="https://static.wixstatic.com/media/88810b_c97c1babaaf543d5b9002c8a4ef8b91e~mv2.jpg/v1/fill/w_127,h_127,al_c,lg_1,q_80,enc_auto/image002.jpg"></img>
            <img src="https://static.wixstatic.com/media/88810b_fb4dfe55d216494e92629d2fcc87a198~mv2.png/v1/fill/w_110,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/multicoloured%20flag_edited.png"></img>
            <img src="https://static.wixstatic.com/media/88810b_7eff8abcb64644da8d229c1fa8257824~mv2.png/v1/fill/w_110,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AMC-CERTIFIED.png"></img>
            <img src="https://static.wixstatic.com/media/88810b_d8bf7103d8404ddaa3b7c243ac69bb62~mv2.png/v1/fill/w_116,h_127,al_c,lg_1,q_85,enc_auto/Badge%20Image.png"></img>
            <img src="https://static.wixstatic.com/media/88810b_c50484ef4d734a16892cdd34fd249aef~mv2.png/v1/fill/w_215,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/hitched_logo_rgb_purple9d8ae6a7deadf34e8eeae66e9234722d_edited.png"></img>
          </div>
        </div>

    </div>
  );
};

export default Home;
