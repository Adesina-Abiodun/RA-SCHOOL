document.addEventListener("DOMContentLoaded", function () {
    const sidebarWrapper = document.getElementById("sidebarWrapper");
    const toggleSidebar = document.getElementById("toggleSidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const submenuDiv = document.getElementById("submenuDiv");
    const loginSubmenu = document.getElementById("loginSubmenu");
    const toggleLogin = document.getElementById("toggleLogin");

    // Your menuItems data as an array of objects
    const menuItems = [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'About Us',
          subMenu: [
            { title: 'Welcome From Our Principal', link: 'https://rabonny.sharepoint.com/Pages/AboutUs.aspx' },
            { title: 'Our Vision', link: 'https://rabonny.sharepoint.com/Pages/our-vision.aspx' },
            { title: 'Our Values', link: 'https://rabonny.sharepoint.com/Pages/our-values.aspx' },
            { title: 'Our Curriculum', link: 'https://rabonny.sharepoint.com/Pages/our-curriculum.aspx' },
            {title: 'Happiness-Wellbeing', link: 'https://rabonny.sharepoint.com/Pages/Happiness-Wellbeing.aspx'},
            {title: 'Board of Directors', link: 'https://rabonny.sharepoint.com/Pages/BOTa.aspx'},
            {title: 'Our Campus', link: 'https://rabonny.sharepoint.com/Pages/our-campus.aspx'},
            {title: 'Key Policy', link: 'https://rabonny.sharepoint.com/Pages/RAISPolicy.aspx'},
            {title: 'Accreditation & Memberships', link: 'https://rabonny.sharepoint.com/Pages/accreditation-memberships.aspx'}
          ]
        },
        {
          title: 'School Structure',
          subMenu: [
            { title: 'Early Years', link: '#' },
            { title: 'Primary School', link: '#' },
            { title: 'Learning Support', link: '#' },
            { title: 'Admin Unit', link: '#' }
          ]
        },
        {
          title: 'Academics',
          subMenu: [
            { title: 'Curriculum', link: '#' },
            { title: 'Assessment & Reporting', link: '#' },
          ]
        },
        {
          title: 'Wider Learning',
          subMenu: [
            { title: 'ASA', link: '#' },
            { title: 'Sports', link: '#' },
            { title: 'Visual & Performing Art', link: '#' },
            { title: 'Trips', link: '#' },
            { title: 'Team Work & Leadership', link: '#' }
      
          ]
        },
        {
          title: 'School Governance',
          subMenu: [
            { title: 'Board of Trustees', link: '#' },
            { title: 'School Leadership Team', link: '#' },
            { title: 'Wider Leadership Team', link: '#' },
          ]
        },
        {
          title: 'News',
          subMenu: [
            { title: 'School Calender', link: '#' },
            { title: 'News & Event', link: '#' },
          ]
        },
        {
          title: 'Our Community',
          subMenu: [
            { title: 'Our Staffs', link: 'https://rabonny.sharepoint.com/Pages/our-staff.aspx' },
            { title: 'Our Parents', link: 'https://rabonny.sharepoint.com/Pages/our-parents.aspx' },
            {title: 'Our Students', link: 'https://rabonny.sharepoint.com/Pages/our-students.aspx'},
          ]
        },
        {
          title: 'Alumni',
          subMenu: [
            { title: 'School Leavers Destination', link: '#' },
            { title: 'Testimonials', link: '#' },
          ]
        },
        {
          title: 'Join Our Team',
          link: '#'
        }
      
      ];

    // Function to toggle the sidebar
    toggleSidebar.addEventListener("click", function () {
        sidebarWrapper.classList.toggle("open");
    });

    // Function to close the sidebar
    closeSidebar.addEventListener("click", function () {
        sidebarWrapper.classList.remove("open");
    });

    // Function to toggle the login submenu
    toggleLogin.addEventListener("click", function () {
        loginSubmenu.classList.toggle("open");
    });

    // Function to dynamically generate menu items
// Function to dynamically generate menu items
function generateMenuItems() {
    const sidebarMenu = document.querySelector(".sidebar-menu");
    const submenuDiv = document.querySelector(".submenu-div");

    menuItems.forEach((menuItem) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");

        if (menuItem.subMenu) {
            const sign = document.createElement("p");
            sign.classList.add("sign");
            sign.textContent = isSubMenuOpen(menuItem.title) ? "-" : ">";
            listItem.appendChild(sign);

            listItem.textContent += menuItem.title;
            listItem.addEventListener("click", function () {
                toggleSubMenu(menuItem.title);
            });

            const submenu = document.createElement("ul");
            submenu.classList.add("sub-menu");

            menuItem.subMenu.forEach((subMenuItem) => {
                const subItem = document.createElement("li");
                const subLink = document.createElement("a");

                subLink.textContent = subMenuItem.title;
                subLink.href = subMenuItem.link;
                subItem.appendChild(subLink);
                submenu.appendChild(subItem);
            });

            submenuDiv.appendChild(submenu);
        } else {
            link.textContent = menuItem.title;
            link.href = menuItem.link;
            listItem.appendChild(link);
        }

        sidebarMenu.appendChild(listItem);
    });
}

generateMenuItems();

    // Function to toggle submenu
    function toggleSubMenu(subMenuTitle) {
        const submenu = document.querySelector(`.sub-menu[data-title="${subMenuTitle}"]`);
        submenu.classList.toggle("open");
    }
});
