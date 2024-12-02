import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect,useState } from 'react'; 
import { jwtDecode } from "jwt-decode";
import Navbar from './navbar.js';
import Recipe from './Recipe.js';
import Collection from './Collection.js';
import Tips from './Tips.js';
import Login from './Login.js';
import Register from './Register.js';
import Footer from './Footer.js';
import Home from './Home.js';
import IceCream2 from './recipefolder/categoriesfolder/breakfastfolder/icecream2.js';
import IceCream1 from './recipefolder/categoriesfolder/breakfastfolder/icecream1.js';
import IceCream3 from './recipefolder/categoriesfolder/breakfastfolder/icecream3.js';
import Categories from './recipefolder/countries.js';
import Breakfast from './recipefolder/categoriesfolder/Breakfast.js'
import Brunch from './recipefolder/categoriesfolder/Brunch.js'
import Lunch from './recipefolder/categoriesfolder/Lunch.js'
import Dinner from './recipefolder/categoriesfolder/Dinner.js'
import IceCream from './recipefolder/categoriesfolder/Icecream.js';
import Dessert from './recipefolder/categoriesfolder/Dessert.js';
import Occasions from './recipefolder/Occasions.js';
import Birthday from './recipefolder/occasionsfolder/Birthday.js';
import Fathersday from './recipefolder/occasionsfolder/fathersday.js';
import MothersDay from './recipefolder/occasionsfolder/MothersDay.js';
import Party from './recipefolder/occasionsfolder/Party.js';
import Holidays from './recipefolder/occasionsfolder/Holidays.js';
import Newyears from './recipefolder/occasionsfolder/Newyeareve.js';
import Countries from './recipefolder/countries.js'
import Indian from './recipefolder/cuisinsfolder/indian.js';
import Maxican from './recipefolder/cuisinsfolder/maxican.js';
import Turkish from './recipefolder/cuisinsfolder/Turkish.js';
import Thai from './recipefolder/cuisinsfolder/Thai.js';
import Korean from './recipefolder/cuisinsfolder/Korean.js';
import Italian from './recipefolder/cuisinsfolder/Italian.js';
import Popular from './recipefolder/Popular.js';
import Minmeals from './recipefolder/Popular/30minmeals.js';
import DairyFree from './recipefolder/Popular/DairyFree.js';
import Kids from './recipefolder/Popular/KidFriendly.js';
import Toddlers from './recipefolder/Popular/Toddlers.js';
import BBQ from './recipefolder/Popular/BBQ.js';
import Family from './recipefolder/Popular/FamilyDinners.js';
import CategoryPage from './recipefolder/categorypage.js';
import RecipeForm from './recipefolder/reactform.js'; 
import Pancake from './recipefolder/categoriesfolder/breakfastfolder/pancakes.js'
import Sandwich from './recipefolder/categoriesfolder/breakfastfolder/sandwich.js'
import Pohe from './recipefolder/categoriesfolder/breakfastfolder/pohe.js'
import AddRecipe from './Addrecipe.js';
import MasalaBakedIndianEggs from './recipefolder/categoriesfolder/breakfastfolder/IndianEggs.js';
import ChannaMasala from './recipefolder/categoriesfolder/breakfastfolder/chanamasala.js';
import OrderIngredients from './recipefolder/orderinging.js';
import Idali from './recipefolder/categoriesfolder/breakfastfolder/idli.js';
import FudgyBrownies from './recipefolder/categoriesfolder/breakfastfolder/fuggyBrowne.js' 
import CrustlessCheesecake from './recipefolder/categoriesfolder/breakfastfolder/crustalcheesecake.js'
import LemonBlueberryBread from './recipefolder/categoriesfolder/breakfastfolder/blueberrybread.js'
import PavBhaji from './recipefolder/categoriesfolder/breakfastfolder/pavbhaji.js'
import CrockpotLasagnaSoup from './recipefolder/categoriesfolder/breakfastfolder/CrockpotLasagnaSoup.js';
import OnePotStuffedPepperCasserole from './recipefolder/categoriesfolder/breakfastfolder/PepperCasserole';
import Dalchawal from './recipefolder/categoriesfolder/breakfastfolder/dalchawal.js'
import Rajmachawal from './recipefolder/categoriesfolder/breakfastfolder/ranjmachawal.js'
import Dalbati from './recipefolder/categoriesfolder/breakfastfolder/dalbati.js'
function Main() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [iscreator, setIsCreator] = useState(false);

    // useEffect(() => {
    //   const token = localStorage.getItem('authToken');
    // //   const decodeToken=jwtDecode(token)
    // //   console.log("This Is Creator ? ",decodeToken.is_creator)
    //   if (token) {
    //     setIsAuthenticated(true);
    //     console.log("Authenticate Is Being True",token)
    //   }
    // //   if(decodeToken.is_creator===true){
    // //     setIsCreator(true)
    // //   }
      
      
    // }, []);
    useEffect(() => {
        const token = localStorage.getItem('authToken'); // Ensure you're using the right key
        if (token) {
          setIsAuthenticated(true);
          console.log("Authenticate Is Being True", token);
      
          try {
            const decodedToken = jwtDecode(token);
            console.log("Decoded Token: ", decodedToken);
            // Check and set isCreator if necessary
            if (decodedToken.is_creator) {
              setIsCreator(true);
            }
          } catch (error) {
            console.error("Error decoding token: ", error);
          }
        }
      }, []);
      
   
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false); // Update state to reflect logout
    };

  
    return (
        <Router>
            <div>
                <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
                <Routes>
                    <Route path="/Home" element={<Home  isCreator={iscreator} isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>} />
                    <Route path="/recipes" element={<Recipe  isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>} />
                    <Route path="/recipe/categories" element={<Categories  isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>} />
                    <Route path="/category/:id" component={<CategoryPage/>} />
                    <Route path="/recipe-list" component={<RecipeForm/>} />
                    <Route path="/add-recipe" element={<AddRecipe />} />
                    <Route path="/recipe/categories/details/breakfast" element={<Breakfast />} />
                    <Route path="/recipe/breakfast/details/chocolate" element={<IceCream1 />} />
                    <Route path="/recipe/breakfast/details/strawberry" element={<IceCream2 />} />
                    <Route path="/recipe/breakfast/details/butterscottch" element={<IceCream3 />} />
                    <Route path='/recipe/breakfast/details/dal-chawal' element={<Dalchawal/>}/>
                    <Route path='/recipe/breakfast/details/rajma-chawal' element={<Rajmachawal/>}/>
                    <Route path='/recipe/breakfast/details/dal bati' element={<Dalbati/>}/>
                    <Route path="/recipe/categories/details/brunch" element={<Brunch />} />
                    <Route path="/recipe/breakfast/details/pancakes" element={<Pancake/>} />
                    <Route path="/recipe/breakfast/details/sandwich" element={<Sandwich/>} />
                    <Route path="/recipe/breakfast/details/pohe" element={<Pohe/>} />
                    <Route path="/recipe/breakfast/details/masala baked indian eggs" element={<MasalaBakedIndianEggs />} />
                    <Route path="/recipe/breakfast/details/channamasala" element={<ChannaMasala />} />
                    <Route path='/recipe/breakfast/details/one pot stuffed pepper casserole' element={<OnePotStuffedPepperCasserole/>}/>
                     <Route path='/recipe/breakfast/details/crockpot lasagna soup' element={<CrockpotLasagnaSoup/>}/>
                    <Route path="/recipe/breakfast/details/pav bhaji" element={<PavBhaji />} />
                    <Route path="/recipe/breakfast/details/classic south indian rava idli" element={<Idali />} />
                    <Route path="/order-ingredients" element={<OrderIngredients />} />
                    <Route path="/recipe/breakfast/details/lemon blueberry bread" element={<LemonBlueberryBread />} />
                    <Route path="/recipe/breakfast/details/crustless cheesecake" element={<CrustlessCheesecake />} />
                    <Route path="/recipe/breakfast/details/fudgy brownies" element={<FudgyBrownies />} />
                    <Route path="/recipe/categories/details/lunch" element={<Lunch />} />
                    <Route path="/recipe/categories/details/dinner" element={<Dinner />} />
                    <Route path="/recipe/categories/details/ice cream" element={<IceCream />} />
                    <Route path="/recipe/categories/details/dessert" element={<Dessert />} />
                    <Route path="/recipe/occasions" element={<Occasions />} />
                    <Route path="/recipe/occasion/details/birthday" element={<Birthday />} />
                    <Route path="/recipe/occasion/details/fathers day" element={<Fathersday />} />
                    <Route path="/recipe/occasion/details/mothers day" element={<MothersDay />} />
                    <Route path="/recipe/occasion/details/holidays" element={<Holidays />} />
                    <Route path="/recipe/occasion/details/party" element={<Party />} />
                    <Route path="/recipe/occasion/details/newyears" element={<Newyears />} />
                    <Route path="/recipe/occasions" element={<Countries />} />
                    <Route path="/recipe/categories/details/indian" element={<Indian />} />
                    <Route path="/recipe/categories/details/thai" element={<Thai />} />
                    <Route path="/recipe/categories/details/turkish" element={<Turkish />} />
                    <Route path="/recipe/categories/details/italian" element={<Italian />} />
                    <Route path="/recipe/categories/details/maxican" element={<Maxican />} />
                    <Route path="/recipe/categories/details/korean" element={<Korean />} />
                    <Route path="/recipe/popular" element={<Popular />} />
                    <Route path="/recipe/categories/details/30 minute meals" element={<Minmeals />} />
                    <Route path="/recipe/categories/details/dairy free" element={<DairyFree />} />
                    <Route path="/recipe/categories/details/kid friendly" element={<Kids />} />
                    <Route path="/recipe/categories/details/bbq" element={<BBQ />} />
                    <Route path="/recipe/categories/details/toddlers" element={<Toddlers />} />
                    <Route path="/recipe/categories/details/family dinners" element={<Family />} />
                    <Route path="/collections" element={<Collection />} />
                    <Route path="/tips" element={<Tips />} />
                    <Route path="/login" element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} />
                    <Route path="/register" element={<Register onSignupSuccess={() => setIsAuthenticated(true)} />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default Main;
