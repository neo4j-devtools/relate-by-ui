import React from 'react';

import { storiesOf } from '@storybook/react';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import * as faker from "faker";

const typeStories = storiesOf('Element/List/Types', module);

typeStories.add('List', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui list">
        <div class="item">Apples</div>
        <div class="item">Pears</div>
        <div class="item">Oranges</div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui list">
        <div class="item">
          <i class="users icon"></i>
          <div class="content">
            Semantic UI
          </div>
        </div>
        <div class="item">
          <i class="marker icon"></i>
          <div class="content">
            New York, NY
          </div>
        </div>
        <div class="item">
          <i class="mail icon"></i>
          <div class="content">
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          </div>
        </div>
        <div class="item">
          <i class="linkify icon"></i>
          <div class="content">
            <a href="http://www.semantic-ui.com">semantic-ui.com</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui relaxed divided list">
        <div class="item">
          <i class="large github middle aligned icon"></i>
          <div class="content">
            <a class="header">Semantic-Org/Semantic-UI</a>
            <div class="description">Updated 10 mins ago</div>
          </div>
        </div>
        <div class="item">
          <i class="large github middle aligned icon"></i>
          <div class="content">
            <a class="header">Semantic-Org/Semantic-UI-Docs</a>
            <div class="description">Updated 22 mins ago</div>
          </div>
        </div>
        <div class="item">
          <i class="large github middle aligned icon"></i>
          <div class="content">
            <a class="header">Semantic-Org/Semantic-UI-Meteor</a>
            <div class="description">Updated 34 mins ago</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui list">
        <div class="item">
          <i class="folder icon"></i>
          <div class="content">
            <div class="header">src</div>
            <div class="description">Source files for project</div>
            <div class="list">
              <div class="item">
                <i class="folder icon"></i>
                <div class="content">
                  <div class="header">site</div>
                  <div class="description">Your site's theme</div>
                </div>
              </div>
              <div class="item">
                <i class="folder icon"></i>
                <div class="content">
                  <div class="header">themes</div>
                  <div class="description">Packaged theme files</div>
                  <div class="list">
                    <div class="item">
                      <i class="folder icon"></i>
                      <div class="content">
                        <div class="header">default</div>
                        <div class="description">Default packaged theme</div>
                      </div>
                    </div>
                    <div class="item">
                      <i class="folder icon"></i>
                      <div class="content">
                        <div class="header">my_theme</div>
                        <div class="description">Packaged themes are also available in this folder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <i class="file icon"></i>
                <div class="content">
                  <div class="header">theme.config</div>
                  <div class="description">Config file for setting packaged themes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <i class="folder icon"></i>
          <div class="content">
            <div class="header">dist</div>
            <div class="description">Compiled CSS and JS files</div>
            <div class="list">
              <div class="item">
                <i class="folder icon"></i>
                <div class="content">
                  <div class="header">components</div>
                  <div class="description">Individual component CSS and JS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <i class="file icon"></i>
          <div class="content">
            <div class="header">semantic.json</div>
            <div class="description">Contains build settings for gulp</div>
          </div>
        </div>
      </div>
    </div>
  </div>
));


typeStories.add('Bulleted', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui bulleted list">
        <div class="item">Gaining Access</div>
        <div class="item">Inviting Friends</div>
        <div class="item">
          <div>Benefits</div>
          <div class="list">
            <a class="item" href="#">Link to somewhere</a>
            <div class="item">Rebates</div>
            <div class="item">Discounts</div>
          </div>
        </div>
        <div class="item">Warranty</div>
      </div>
    </div>
    <div className="ui segment">
      <ul class="ui list">
        <li>Gaining Access</li>
        <li>Inviting Friends</li>
        <li>Benefits
          <ul>
            <li>Use Anywhere</li>
            <li>Rebates</li>
            <li>Discounts</li>
          </ul>
        </li>
        <li>Warranty</li>
      </ul>
    </div>
  </div>
));

typeStories.add('Ordered', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui ordered list">
        <a class="item">Getting Started</a>
        <a class="item">Introduction</a>
        <div class="item">
          <a>Languages</a>
          <div class="list">
            <a class="item">HTML</a>
            <a class="item">Javascript</a>
            <a class="item">CSS</a>
          </div>
        </div>
        <a class="item">Review</a>
      </div>
    </div>
    <div className="ui segment">
      <ol class="ui list">
        <li>Signing Up</li>
        <li>User Benefits</li>
        <li>User Types
          <ol>
            <li>Admin</li>
            <li>Power User</li>
            <li>Regular User</li>
          </ol>
        </li>
        <li>Deleting Your Account</li>
      </ol>
    </div>
    <div className="ui segment">
      <ol class="ui list">
        <li value="*">Signing Up</li>
        <li value="*">User Benefits</li>
        <li value="*">User Types
          <ol>
            <li value="-">Admin</li>
            <li value="-">Power User</li>
            <li value="-">Regular User</li>
          </ol>
        </li>
        <li value="*">Deleting Your Account</li>
      </ol>
    </div>
  </div>
));

typeStories.add('Link', () => (
  <div className="ui segment">
    <div class="ui link list">
      <div class="active item">Home</div>
      <a class="item">About</a>
      <a class="item">Jobs</a>
      <a class="item">Team</a>
    </div>
  </div>
));

const contentStories = storiesOf('Element/List/Content', module);

contentStories.add('Item', () => (
  <div className="ui segment">
    <div class="ui list">
      <div class="item">
        1
      </div>
      <div class="item">
        2
      </div>
      <div class="item">
        3
      </div>
    </div>
  </div>
));

contentStories.add('Icon', () => (
  <div className="ui segment">
    <div class="ui list">
      <a class="item">
        <i class="help icon"></i>
        <div class="content">
          <div class="header">Floated Icon</div>
          <div class="description">This text will always have a left margin to make sure it sits alongside your icon</div>
        </div>
      </a>
      <a class="item">
        <i class="right triangle icon"></i>
        <div class="content">
          <div class="header">Icon Alignment</div>
          <div class="description">Floated icons are by default top aligned. To have an icon top aligned try this example.</div>
        </div>
      </a>
      <div class="item">
        <i class="help icon"></i>
        Inline Text
      </div>
    </div>
  </div>
));

contentStories.add('Image', () => (
  <div className="ui segment">
    <div class="ui list">
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_1.png"/>
        <div class="content">
          <a class="header">Rachel</a>
          <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_2.png"/>
        <div class="content">
          <a class="header">Lindsay</a>
          <div class="description">Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_3.png"/>
        <div class="content">
          <a class="header">Matthew</a>
          <div class="description">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
        <div class="content">
          <a class="header">Jenny Hess</a>
          <div class="description">Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_5.png"/>
        <div class="content">
          <a class="header">Veronika Ossi</a>
          <div class="description">Has not watched anything recently</div>
        </div>
      </div>
    </div>
  </div>
));

contentStories.add('Link', () => (
  <div className="ui segment">
    <div class="ui list">
      <a class="item">What is a FAQ?</a>
      <a class="item">Who is our user?</a>
      <a class="item">Where is our office located?</a>
    </div>
  </div>
));

contentStories.add('Header', () => (
  <div className="ui segment">
    <div class="ui list">
      <div class="item">
        <div class="header">New York City</div>
        A lovely city
      </div>
      <div class="item">
        <div class="header">Chicago</div>
        Also quite a lovely city
      </div>
      <div class="item">
        <div class="header">Los Angeles</div>
        Sometimes can be a lovely city
      </div>
      <div class="item">
        <div class="header">San Francisco</div>
        What a lovely city
      </div>
    </div>
  </div>
));

contentStories.add('Description', () => (
  <div className="ui segment">
    <div class="ui list">
      <div class="item">
        <i class="map marker icon"></i>
        <div class="content">
          <a class="header">Krolewskie Jadlo</a>
          <div class="description">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
        </div>
      </div>
      <div class="item">
        <i class="map marker icon"></i>
        <div class="content">
          <a class="header">Xian Famous Foods</a>
          <div class="description">A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.</div>
        </div>
      </div>
      <div class="item">
        <i class="map marker icon"></i>
        <div class="content">
          <a class="header">Sapporo Haru</a>
          <div class="description">Greenpoint's best choice for quick and delicious sushi.</div>
        </div>
      </div>
      <div class="item">
        <i class="map marker icon"></i>
        <div class="content">
          <a class="header">Enid's</a>
          <div class="description">At night a bar, during the day a delicious brunch spot.</div>
        </div>
      </div>
    </div>
  </div>
));

const variationStories = storiesOf('Element/List/Variations', module);

variationStories.add('Horizontal', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui horizontal list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_1.png"/>
          <div class="content">
            <div class="header">Tom</div>
            Top Contributor
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_2.png"/>
          <div class="content">
            <div class="header">Christian Rocha</div>
            Admin
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_3.png"/>
          <div class="content">
            <div class="header">Matt</div>
            Top Rated User
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui ordered horizontal list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
          <div class="content">
            <div class="header">Steve Jobes</div>
            50 Points
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_5.png"/>
          <div class="content">
            <div class="header">Stevie Feliciano</div>
            44 Points
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_6.png"/>
          <div class="content">
            <div class="header">Jenny Hess</div>
            11 Points
          </div>
        </div>
      </div>
    </div>
  </div>
));

variationStories.add('Inverted', () => (
  <div className="ui segment">
    <div class="ui inverted segment">
      <div class="ui inverted relaxed divided list">
        <div class="item">
          <div class="content">
            <div class="header">Snickerdoodle</div>
            An excellent companion
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="header">Poodle</div>
            A poodle, its pretty basic
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="header">Paulo</div>
            He's also a dog
          </div>
        </div>
      </div>
    </div>
  </div>
));

variationStories.add('Selection', () => (
  <div className="ui segment">
    <div class="ui middle aligned selection list">
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_7.png"/>
        <div class="content">
          <div class="header">Helen</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_8.png"/>
        <div class="content">
          <div class="header">Christian</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_9.png"/>
        <div class="content">
          <div class="header">Daniel</div>
        </div>
      </div>
    </div>
  </div>
));

variationStories.add('Animated', () => (
  <div className="ui segment">
    <div class="ui middle aligned animated list">
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_1.png"/>
        <div class="content">
          <div class="header">Helen</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_2.png"/>
        <div class="content">
          <div class="header">Christian</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_3.png"/>
        <div class="content">
          <div class="header">Daniel</div>
        </div>
      </div>
    </div>
  </div>
));


variationStories.add('Relaxed', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui relaxed list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
          <div class="content">
            <a class="header">Daniel Louise</a>
            <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_5.png"/>
          <div class="content">
            <a class="header">Stevie Feliciano</a>
            <div class="description">Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_6.png"/>
          <div class="content">
            <a class="header">Elliot Fu</a>
            <div class="description">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui relaxed horizontal list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_7.png"/>
          <div class="content">
            <a class="header">Daniel Louise</a>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_8.png"/>
          <div class="content">
            <a class="header">Stevie Feliciano</a>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_9.png"/>
          <div class="content">
            <a class="header">Elliot Fu</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui very relaxed list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_1.png"/>
          <div class="content">
            <a class="header">Daniel Louise</a>
            <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_2.png"/>
          <div class="content">
            <a class="header">Stevie Feliciano</a>
            <div class="description">Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_3.png"/>
          <div class="content">
            <a class="header">Elliot Fu</a>
            <div class="description">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui very relaxed horizontal list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
          <div class="content">
            <a class="header">Daniel Louise</a>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_5.png"/>
          <div class="content">
            <a class="header">Stevie Feliciano</a>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_6.png"/>
          <div class="content">
            <a class="header">Elliot Fu</a>
          </div>
        </div>
      </div>
    </div>
  </div>
));

variationStories.add('Divided', () => (
  <div className="ui segment">
    <div class="ui middle aligned divided list">
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_7.png"/>
        <div class="content">
          <a class="header">Daniel Louise</a>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_8.png"/>
        <div class="content">
          <a class="header">Stevie Feliciano</a>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/avatar_9.png"/>
        <div class="content">
          <a class="header">Elliot Fu</a>
        </div>
      </div>
    </div>
  </div>
));

variationStories.add('Celled', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui celled list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_1.png"/>
          <div class="content">
            <div class="header">Snickerdoodle</div>
            An excellent companion
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_2.png"/>
          <div class="content">
            <div class="header">Poodle</div>
            A poodle, its pretty basic
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_3.png"/>
          <div class="content">
            <div class="header">Paulo</div>
            He's also a dog
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui celled ordered list">
        <div class="item">Cats</div>
        <div class="item">Horses</div>
        <div class="item">Dogs
          <div class="list">
            <div class="item">Labradoodles</div>
            <div class="item">Shiba Inu</div>
            <div class="item">Mastiff</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui celled horizontal list">
        <div class="item">About Us</div>
        <div class="item">Contact</div>
        <div class="item">Support</div>
      </div>
    </div>
  </div>
));

variationStories.add('Size', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui mini horizontal divided list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
          <div class="content">
            <div class="header">Helen</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_5.png"/>
          <div class="content">
            <div class="header">Christian</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_6.png"/>
          <div class="content">
            <div class="header">Daniel</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui tiny horizontal divided list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
          <div class="content">
            <div class="header">Helen</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_5.png"/>
          <div class="content">
            <div class="header">Christian</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_6.png"/>
          <div class="content">
            <div class="header">Daniel</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui small horizontal divided list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
          <div class="content">
            <div class="header">Helen</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_5.png"/>
          <div class="content">
            <div class="header">Christian</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_6.png"/>
          <div class="content">
            <div class="header">Daniel</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui large horizontal divided list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
          <div class="content">
            <div class="header">Helen</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_5.png"/>
          <div class="content">
            <div class="header">Christian</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_6.png"/>
          <div class="content">
            <div class="header">Daniel</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui big horizontal divided list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
          <div class="content">
            <div class="header">Helen</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_5.png"/>
          <div class="content">
            <div class="header">Christian</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_6.png"/>
          <div class="content">
            <div class="header">Daniel</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui huge horizontal divided list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
          <div class="content">
            <div class="header">Helen</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_5.png"/>
          <div class="content">
            <div class="header">Christian</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_6.png"/>
          <div class="content">
            <div class="header">Daniel</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui massive horizontal divided list">
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
          <div class="content">
            <div class="header">Helen</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_5.png"/>
          <div class="content">
            <div class="header">Christian</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/avatar_6.png"/>
          <div class="content">
            <div class="header">Daniel</div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
));

const contentVariationStories = storiesOf('Element/List/Content Variations', module);

contentVariationStories.add('Vertically Aligned', () => (
  <div className="ui segment">
    <div class="ui horizontal list">
      <div class="item">
        <img class="ui avatar image" src="/images/wireframe/square-image.png"/>
        <div class="top aligned content">
          Top Aligned
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/wireframe/square-image.png"/>
        <div class="middle aligned content">
          Middle
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/wireframe/square-image.png"/>
        <div class="bottom aligned content">
          Bottom
        </div>
      </div>
    </div>
  </div>
));


contentVariationStories.add('Floated', () => (
  <div className="ui segment">
    <div class="ui middle aligned divided list">
      <div class="item">
        <div class="right floated content">
          <div class="ui button">Add</div>
        </div>
        <img class="ui avatar image" src="/images/avatar/avatar_1.png"/>
        <div class="content">
          Lena
        </div>
      </div>
      <div class="item">
        <div class="right floated content">
          <div class="ui button">Add</div>
        </div>
        <img class="ui avatar image" src="/images/avatar/avatar_2.png"/>
        <div class="content">
          Lindsay
        </div>
      </div>
      <div class="item">
        <div class="right floated content">
          <div class="ui button">Add</div>
        </div>
        <img class="ui avatar image" src="/images/avatar/avatar_3.png"/>
        <div class="content">
          Mark
        </div>
      </div>
      <div class="item">
        <div class="right floated content">
          <div class="ui button">Add</div>
        </div>
        <img class="ui avatar image" src="/images/avatar/avatar_4.png"/>
        <div class="content">
          Molly
        </div>
      </div>
    </div>
  </div>
));
