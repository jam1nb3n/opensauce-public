var currentUser = {
    Username: "thoward",
    ProfilePicture: "https://cdn.opensauce.uk/assets/testingfiles/todd.jpg",
    Datejoined: 1604508483,
    Name: "Todd Howard",
    Email: "todd@opensauce.uk",
    Type: "User",
    Bio: "",
    Favorites: [
        {
            Type: "Author",
            Name: "peter_bread",
            Picture: "https://cdn.opensauce.uk/assets/testingfiles/peter.jpg",
            Link: "http://www.example.com",
            Position: 1
        },
        {
            Type: "Ingredient",
            Name: "Tomato",
            Picture: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg",
            Link: "https://www.healthline.com/nutrition/foods/tomatoes",
            Postion: 2
        },
        {
            Type: "Recipe",
            Name: "Sourdough",
            Picture: "https://www.theclevercarrot.com/wp-content/uploads/2013/12/sourdough-bread-round-1-of-1.jpg",
            Link: "https://www.theclevercarrot.com/2014/01/sourdough-bread-a-beginners-guide/",
            Position: 3
        }
    ]
}


var account = document.getElementById("account-button");
var isWindowOpen = false;
account.onclick = function(){AccountButtonClicked()};

function AccountButtonClicked()
{
    if(isWindowOpen)
    {
        CloseWindow();
        isWindowOpen = false;
    }
    else
    {
        OpenWindow();
        isWindowOpen = true;
    }
}

function OpenWindow()
{
    document.getElementById("account-page").style.display = "initial";
    var image = document.getElementById("account-image")
    image.src = currentUser.ProfilePicture;
    document.getElementById("account-name").innerText = currentUser.Name;
    document.getElementById("account-email").innerText = currentUser.Email;
}

function CloseWindow()
{
    console.log("Closing Window...");
    document.getElementById("account-page").style.display = "none";
}

function ToggleFavorites()
{
    let element = document.getElementById("account-favorites");
    let style = getComputedStyle(element);
    if (style.display == "none")
    {
        element.style.display = "flex";
        GetFavorites();
    }
    else
    {
        element.style.display = "none";
    }
}


function ToggleSettings()
{
    let element = document.getElementById("account-settings-menu");
    let style = getComputedStyle(element);
    if (style.display == "none")
    {
        element.style.display = "initial";
        GetFavorites();
    }
    else
    {
        element.style.display = "none";
    }
}




function GetFavorites()
{
    currentUser.Favorites.forEach((object) => {
        console.log(object);
        nodeA = document.createElement("a");
        nodeA.src = object.Link;

        nodeI = document.createElement("img");
        nodeI.src = object.Picture;
        nodeI.alt = object.Name;
        nodeI.title = object.Name;

        nodeA.appendChild(nodeI);
        document.getElementById("favorites-js").appendChild(nodeA);
    });
}

function AccountLeft() {
    document.getElementById("favorites-js").scrollLeft -= 500;
  }
  
  function AccountRight() {
    document.getElementById("favorites-js").scrollLeft += 500;
    return 200;
  };