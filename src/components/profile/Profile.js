import Profiles from "../profiles/Profiles"
import w from './work.jpg'
import b from './blog.jpg'
import c from './covid19.jpg'

let cards = [{img:w,title:"News App using ReactJS (Parsing XML RSS feed to JSON)",text:"News App using ReactJS(Parsing XML to JSON) Photo by Christina Morillo from PexelsLive Demo:"},
{img:b,title:"Medium Like Blogging pp Using Angullar 9 and Firebase",text:"Creating a Medium Like Blog App Using Angular 9 and Firebase Photo by Miguei A. Padrihan from PexelsLive Demo:"},
{img:c,title:"COVID 19 Tracker (Statistics) app Using Angular",text:"COVID 19 Tracker (Statistics) app Using Angular Mode DemoIntroduction: Everyone is aware"}]

function Profile() {
  return (
    <div className="container">
        <div class="row">
    <div class="col">
      <Profiles cardObj={cards[0]}/>
    </div>
    <div class="col">
      <Profiles cardObj={cards[1]}/>
    </div>
    <div class="col">
       <Profiles cardObj={cards[2]}/>
    </div>
  </div>
        </div>
  )
}

export default Profile
