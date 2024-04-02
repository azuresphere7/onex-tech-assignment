import { ARTICLE_TYPE } from "./enums";
import { ArticleConfig, FooterMenu, NavbarConfig, RelatedPost, SidebarListItem } from "./interface";

// Navbar config
export const navbarConfig: NavbarConfig[] = [
  {
    id: 1,
    name: "Find EV Cars",
    items: [
      {
        id: 1,
        name: "EV Car 1",
        path: "/"
      },
      {
        id: 2,
        name: "EV Car 2",
        path: "/"
      },
    ]
  },
  {
    id: 2,
    name: "EV Guides",
    items: [
      {
        id: 1,
        name: "Guide 1",
        path: "/"
      },
      {
        id: 2,
        name: "Guide 2",
        path: "/"
      },
    ]
  }
];

// Current article data
export const articleData: ArticleConfig = {
  title: "Biden sets electric vehicle target in drive to cut emissions",
  imageURL: "/assets/images/biden.jpg",
  imageCaptain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus id vitae suspendisse. Ipsum erat malesuada sit faucibus faucibus massa. Mauris et morbi vitae habitant sit. Maecenas pretium in consectetur velit auctor. Porttitor tellus ut pretium, scelerisque orci erat. Etiam imperdiet ridiculus eu tincidunt. Vel dui, pulvinar vivamus lorem risus.<br /><br />Bibendum aliquet adipiscing sed interdum. Arcu consequat fames blandit nisi. Vulputate dignissim tempus duis ultrices. Arcu sed porttitor morbi lobortis mattis pellentesque. Dui quam sed eu ultrices ut nullam. Maecenas tortor auctor eros erat volutpat sapien dui pretium.<br /><br />Hac sed diam tristique in consequat in suspendisse habitant. Et mauris venenatis posuere auctor tortor, placerat. Quisque tincidunt euismod dictum neque, massa nisi. Sagittis, dictum nibh bibendum cursus neque, nunc molestie. Odio viverra sagittis, platea nibh eget. Egestas a cras bibendum amet, mi magna cursus. Ante suscipit felis vitae amet.",
  type: ARTICLE_TYPE.NEWS,
  date: "September 21, 2021"
};

// Right sidebar config
export const sidebarConfig: SidebarListItem[] = [
  {
    id: 1,
    type: ARTICLE_TYPE.FEATURED,
    title: "The US President wants half of all new vehicles and wants some archievements."
  },
  {
    id: 2,
    type: ARTICLE_TYPE.NEWS,
    title: "The US President wants half of all new vehicles and wants some archievements."
  },
  {
    id: 3,
    type: ARTICLE_TYPE.NEWS,
    title: "The US President wants half of all new vehicles and wants some archievements."
  },
];

// Other Articles section config
export const relatedPostConfig: RelatedPost[] = [
  {
    id: 1,
    imageURL: "/assets/images/article1.jpg",
    title: "The US President wants half of all new vehicles to be zero emissions by 2030",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam lorem ipsum."
  },
  {
    id: 2,
    imageURL: "/assets/images/article2.jpg",
    title: "The US President wants half of all new vehicles to be zero emissions by 2030",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam lorem ipsum."
  },
  {
    id: 3,
    imageURL: "/assets/images/article3.jpg",
    title: "The US President wants half of all new vehicles to be zero emissions by 2030",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam lorem ipsum."
  },
];

// Footer config
export const footerConfig: FooterMenu[] = [
  {
    id: 1,
    title: "EVFY",
    items: [
      {
        id: 1,
        name: "Home",
        path: "/"
      },
      {
        id: 2,
        name: "About EVFY",
        path: "/"
      },
      {
        id: 3,
        name: "Contact US",
        path: "/"
      },
      {
        id: 4,
        name: "FAQ",
        path: "/"
      }
    ]
  },
  {
    id: 2,
    title: "EV Cars",
    items: [
      {
        id: 1,
        name: "EV Brands",
        path: "/"
      },
      {
        id: 2,
        name: "Car Types",
        path: "/"
      },
      {
        id: 3,
        name: "EV Types",
        path: "/"
      }
    ]
  },
  {
    id: 3,
    title: "News & Guides",
    items: [
      {
        id: 1,
        name: "Top News",
        path: "/"
      },
      {
        id: 2,
        name: "EV Guides",
        path: "/"
      }
    ]
  },
  {
    id: 4,
    title: "Terms",
    items: [
      {
        id: 1,
        name: "Cookies",
        path: "/"
      },
      {
        id: 2,
        name: "Privacy",
        path: "/"
      },
      {
        id: 3,
        name: "Legal",
        path: "/"
      }
    ]
  },
  {
    id: 5,
    title: "Social",
    items: [
      {
        id: 1,
        name: "Facebook",
        path: "https://facebook.com"
      },
      {
        id: 2,
        name: "LinkedIn",
        path: "https://linkedin.com"
      },
      {
        id: 3,
        name: "Instagram",
        path: "https://instagram.com"
      },
      {
        id: 4,
        name: "Twitter",
        path: "https://twitter.com"
      }
    ]
  }
];