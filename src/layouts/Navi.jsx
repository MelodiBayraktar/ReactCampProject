import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}
