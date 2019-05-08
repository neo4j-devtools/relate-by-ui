import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';

const stories = storiesOf('Semantic UI/Global/Content', module);

stories.add('Headers', () => (
  <div className="ui segment">
    <h1 className="ui header">First header</h1>
    <h2 className="ui header">Second header</h2>
    <h3 className="ui header">Third header</h3>
    <h4 className="ui header">Fourth header</h4>
    <h5 className="ui header">Fifth header</h5>
  </div>
));

stories.add('Page Font', () => (
  <div className="ui segment">
    <h4 className="ui header">Page Font</h4>
    <p>A site can specify styles for page content.</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel tincidunt eros, nec venenatis ipsum. Nulla
      hendrerit urna ex, id sagittis mi scelerisque vitae. Vestibulum posuere rutrum interdum. Sed ut ullamcorper odio,
      non pharetra eros. Aenean sed lacus sed enim ornare vestibulum quis a felis. Sed cursus nunc sit amet mauris
      sodales tempus. Nullam mattis, dolor non posuere commodo, sapien ligula hendrerit orci, non placerat erat felis
      vel dui. Cras vulputate ligula ut ex tincidunt tincidunt. Maecenas eget gravida lorem. Nunc nec facilisis risus.
      Mauris congue elit sit amet elit varius mattis. Praesent convallis placerat magna, a bibendum nibh lacinia non.
    </p>
    <p>
      Fusce mollis sagittis elit ut maximus. Nullam blandit lacus sit amet luctus euismod. Duis luctus leo vel
      consectetur consequat. Phasellus ex ligula, pellentesque et neque vitae, elementum placerat eros. Proin eleifend
      odio nec velit lacinia suscipit. Morbi mollis ante nec dapibus gravida. In tincidunt augue eu elit porta, vel
      condimentum purus posuere. Maecenas tincidunt, erat sed elementum sagittis, tortor erat faucibus tellus, nec
      molestie mi purus sit amet tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
      turpis egestas. Mauris a tincidunt metus. Fusce congue metus aliquam ex auctor eleifend.
    </p>
  </div>
));

stories.add('Text Selection', () => (
  <div className="ui segment">
    <h4 className="ui header">Text Selection</h4>
    <p>A site can specify text selection styles.</p>
    <p>
      Fusce mollis sagittis elit ut maximus. Nullam blandit lacus sit amet luctus euismod. Duis luctus leo vel
      consectetur consequat. Phasellus ex ligula, pellentesque et neque vitae, elementum placerat eros. Proin eleifend
      odio nec velit lacinia suscipit. Morbi mollis ante nec dapibus gravida. In tincidunt augue eu elit porta, vel
      condimentum purus posuere. Maecenas tincidunt, erat sed elementum sagittis, tortor erat faucibus tellus, nec
      molestie mi purus sit amet tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
      turpis egestas. Mauris a tincidunt metus. Fusce congue metus aliquam ex auctor eleifend.
    </p>
  </div>
));

stories.add('Links', () => (
  <div className="ui segment">
    <div className="ui bulleted list">
      <a className="item" href="#link">
        List Link
      </a>
      <a className="item" href="#link">
        List Link
      </a>
      <a className="item" href="#link">
        List Link
      </a>
    </div>
    <div className="ui card">
      <a className="image" href="#link">
        <RectShape color="#E0E0E0" style={{ width: '100%', height: 300 }} />
      </a>
      <div className="content">
        <a className="header" href="#link">
          Steve Jobes
        </a>
        <div className="meta">
          <a className="time">Last Seen 2 days ago</a>
        </div>
      </div>
    </div>
    <div className="ui very relaxed items">
      <div className="item">
        <div className="image">
          <MediaBlock color="#E0E0E0" rows={4} />
        </div>
        <div className="content">
          <a className="ui header" href="#link">
            Link Header
          </a>
          <div className="description">
            <p>
              Ut imperdiet dignissim feugiat. Phasellus tristique odio eu justo dapibus, nec rutrum ipsum luctus. Ut
              posuere nec tortor eu ullamcorper. <a href="#link">Etiam pellentesque</a> tincidunt tortor, non sagittis
              nibh pretium sit amet. Sed neque dolor, blandit eu ornare vel, lacinia porttitor nisi. Vestibulum sit amet
              diam rhoncus, consectetur enim sit amet, interdum mauris. Praesent feugiat finibus quam, porttitor varius
              est egestas id.
            </p>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="image">
          <MediaBlock color="#E0E0E0" rows={4} />
        </div>
        <div className="content">
          <a className="ui header" href="#link">
            Link Header
          </a>
          <div className="description">
            <p>
              Ut imperdiet dignissim feugiat. Phasellus tristique odio eu justo dapibus, nec rutrum ipsum luctus. Ut
              posuere nec tortor eu ullamcorper. <a href="#link">Etiam pellentesque</a> tincidunt tortor, non sagittis
              nibh pretium sit amet. Sed neque dolor, blandit eu ornare vel, lacinia porttitor nisi. Vestibulum sit amet
              diam rhoncus, consectetur enim sit amet, interdum mauris. Praesent feugiat finibus quam, porttitor varius
              est egestas id.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
));

stories.add('Code', () => (
  <div className="ui segment">
    <pre>{`MATCH(n {name:'Neo'})-[:KNOWS]->(m {name:'Trinity'}) RETURN n`}</pre>
  </div>
));
