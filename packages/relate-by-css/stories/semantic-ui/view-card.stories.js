import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';

const stories = storiesOf('Semantic UI/Views/Card', module);

stories.add('Card', () => (
  <div className="ui segment">
    <div class="ui card">
      <div class="image">
        <img src="/images/unsplash/angelika-agibalova-1348647-unsplash.jpg" />
      </div>
      <div class="content">
        <a class="header">Kristy</a>
        <div class="meta">
          <span class="date">Joined in 2013</span>
        </div>
        <div class="description">Kristy is an art director living in New York.</div>
      </div>
      <div class="extra content">
        <a>
          <i class="user icon" />
          22 Friends
        </a>
      </div>
    </div>
  </div>
));

stories.add('Cards', () => (
  <div className="ui segment">
    <div class="ui cards">
      <div class="card">
        <div class="content">
          <img class="right floated mini ui image" src="/images/avatar/avatar_5.png" />
          <div class="header">Elliot Fu</div>
          <div class="meta">Friends of Veronika</div>
          <div class="description">Elliot requested permission to view your contact details</div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Approve</div>
            <div class="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <img class="right floated mini ui image" src="/images/avatar/avatar_6.png" />
          <div class="header">Jenny Hess</div>
          <div class="meta">New Member</div>
          <div class="description">
            Jenny wants to add you to the group <b>best friends</b>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Approve</div>
            <div class="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

stories.add('Bigger Cards', () => (
  <div className="ui segment">
    <div class="ui link cards">
      <div class="card">
        <div class="image">
          <img src="/images/unsplash/graham-hunt-1155101-unsplash.jpg" />
        </div>
        <div class="content">
          <div class="header">Matt Giampietro</div>
          <div class="meta">
            <a>Friends</a>
          </div>
          <div class="description">Matthew is an interior designer living in New York.</div>
        </div>
        <div class="extra content">
          <span class="right floated">Joined in 2013</span>
          <span>
            <i class="user icon" />
            75 Friends
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="/images/unsplash/oladimeji-odunsi-415606-unsplash.jpg" />
        </div>
        <div class="content">
          <div class="header">Molly</div>
          <div class="meta">
            <span class="date">Coworker</span>
          </div>
          <div class="description">Molly is a personal assistant living in Paris.</div>
        </div>
        <div class="extra content">
          <span class="right floated">Joined in 2011</span>
          <span>
            <i class="user icon" />
            35 Friends
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="/images/unsplash/roberto-delgado-webb-758117-unsplash.jpg" />
        </div>
        <div class="content">
          <div class="header">Elyse</div>
          <div class="meta">
            <a>Coworker</a>
          </div>
          <div class="description">Elyse is a copywriter working in New York.</div>
        </div>
        <div class="extra content">
          <span class="right floated">Joined in 2014</span>
          <span>
            <i class="user icon" />
            151 Friends
          </span>
        </div>
      </div>
    </div>
  </div>
));

stories.add('Content: Block', () => (
  <div className="ui segment">
    <div class="ui card">
      <div class="content">
        <div class="header">Project Timeline</div>
      </div>
      <div class="content">
        <h4 class="ui sub header">Activity</h4>
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                <a>Helen Troy</a> added two pictures
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content">
        <button class="ui button">Join Project</button>
      </div>
    </div>
  </div>
));

stories.add('Content: Reveal', () => (
  <div className="ui segment">
    <div class="ui card">
      <div class="ui slide masked reveal image">
        <img src="/images/avatar/avatar_1.png" class="visible content" />
        <img src="/images/avatar/avatar_2.png" class="hidden content" />
      </div>
      <div class="content">
        <a class="header">Team Fu &amp; Hess</a>
        <div class="meta">
          <span class="date">Created in Sep 2014</span>
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="users icon" />2 Members
        </a>
      </div>
    </div>
  </div>
));

stories.add('Content: Reveal', () => (
  <div className="ui segment">
    <div class="ui card">
      <div class="ui slide masked reveal image">
        <img src="/images/avatar/avatar_1.png" class="visible content" />
        <img src="/images/avatar/avatar_2.png" class="hidden content" />
      </div>
      <div class="content">
        <a class="header">Team Fu &amp; Hess</a>
        <div class="meta">
          <span class="date">Created in Sep 2014</span>
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="users icon" />2 Members
        </a>
      </div>
    </div>
  </div>
));

stories.add('Content: Header', () => (
  <div className="ui segment">
    <div class="ui cards">
      <div class="card">
        <div class="content">
          <div class="header">Elliot Fu</div>
          <div class="meta">Friend</div>
          <div class="description">Elliot Fu is a film-maker from New York.</div>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <div class="header">Veronika Ossi</div>
          <div class="meta">Friend</div>
          <div class="description">
            Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <div class="header">Jenny Hess</div>
          <div class="meta">Friend</div>
          <div class="description">Jenny is a student studying Media Management at the New School</div>
        </div>
      </div>
    </div>
  </div>
));

stories.add('Content: Metadata', () => (
  <div className="ui segment">
    <div class="ui card">
      <div class="content">
        <div class="header">Cute Dog</div>
        <div class="meta">
          <span>2 days ago</span>
          <a>Animals</a>
          <a className="code">:Dog</a>
        </div>
        <p />
      </div>
    </div>
  </div>
));

stories.add('Content: Link', () => (
  <div className="ui segment">
    <div class="ui card">
      <a class="image" href="#">
        <img src="/images/avatar/avatar_3.png" />
      </a>
      <div class="content">
        <a class="header" href="#">
          Steve Jobes
        </a>
        <div class="meta">
          <a>Last Seen 2 days ago</a>
        </div>
      </div>
    </div>
  </div>
));

stories.add('Content: Buttons', () => (
  <div className="ui segment">
    <div class="ui cards">
      <div class="card">
        <div class="content">
          <div class="header">Elliot Fu</div>
          <div class="description">Elliot Fu is a film-maker from New York.</div>
        </div>
        <div class="ui bottom attached button">
          <i class="add icon" />
          Add Friend
        </div>
      </div>
      <div class="card">
        <div class="content">
          <div class="header">Veronika Ossi</div>
          <div class="description">
            Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
          </div>
        </div>
        <div class="ui bottom attached button">
          <i class="add icon" />
          Add Friend
        </div>
      </div>
      <div class="card">
        <div class="content">
          <div class="header">Jenny Hess</div>
          <div class="description">Jenny is a student studying Media Management at the New School</div>
        </div>
        <div class="ui bottom attached button">
          <i class="add icon" />
          Add Friend
        </div>
      </div>
    </div>
  </div>
));

stories.add('Content: Approval', () => (
  <div className="ui segment">
    <div class="ui card">
      <div class="content">
        <i class="right floated like icon" />
        <i class="right floated star icon" />
        <div class="header">Cute Dog</div>
        <div class="description">
          <p />
        </div>
      </div>
      <div class="extra content">
        <span class="left floated like">
          <i class="like icon" />
          Like
        </span>
        <span class="right floated star">
          <i class="star icon" />
          Favorite
        </span>
      </div>
    </div>
  </div>
));

stories.add('Content: Description', () => (
  <div className="ui segment">
    <div class="ui card">
      <div class="content">
        <div class="header">Cute Dog</div>
        <div class="meta">2 days ago</div>
        <div class="description">
          <p>
            Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others
            for their tiny stature, and even others for their massive size.
          </p>
          <p>Many people also have their own barometers for what makes a cute dog.</p>
        </div>
      </div>
    </div>
  </div>
));

stories.add('Content: Extra', () => (
  <div className="ui segment">
    <div class="ui card">
      <div class="content">
        <div class="header">Cute Dog</div>
        <div class="meta">2 days ago</div>
        <div class="description">
          <p>
            Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others
            for their tiny stature, and even others for their massive size.
          </p>
          <p>Many people also have their own barometers for what makes a cute dog.</p>
        </div>
      </div>
      <div class="extra content">
        <i class="check icon" />
        121 Votes
      </div>
    </div>
  </div>
));

stories.add('Variations: Colored', () => (
  <div className="ui segment">
    <div class="ui four cards">
      <a class="red card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="orange card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="yellow card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="olive card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="green card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="teal card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="blue card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="violet card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="purple card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="pink card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="brown card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="grey card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
      <a class="black card">
        <MediaBlock color="#E0E0E0" rows={4} />
      </a>
    </div>
  </div>
));
