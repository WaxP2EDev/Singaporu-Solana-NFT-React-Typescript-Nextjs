import { ItemLink, List, NavigationWrapper } from "./navigation.styles";
import {Link} from "react-router-dom";
function Navigation({ clicked, handleClick }) {
  
  return (
    <NavigationWrapper clicked={clicked}>
      <List>
       
        <li>
          <ItemLink className="h3" onClick={handleClick}>
          <Link to={`art/create/0`}>
            Mint NFT
            </Link>

          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
          <Link to={`/faq`}>

            FAQ
            </Link>

          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
          <Link to={`/contact`}>

            Get in touch
            </Link>

          </ItemLink>
        </li>
        
      </List>
    </NavigationWrapper>
  );
}

export default Navigation;
