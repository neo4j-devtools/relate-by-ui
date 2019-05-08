import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';

const stories = storiesOf('Element/Typography', module);


stories.add('Page Headers', () => (
  <div className="ui segment">
    <h1 className="ui header">First header</h1>
      <TextBlock color='#E0E0E0' rows={4} />
    <h2 className="ui header">Second header</h2>
      <TextBlock color='#E0E0E0' rows={4} />
    <h3 className="ui header">Third header</h3>
      <TextBlock color='#E0E0E0' rows={4} />
    <h4 className="ui header">Fourth header</h4>
      <TextBlock color='#E0E0E0' rows={4} />
    <h5 className="ui header">Fifth header</h5>
      <TextBlock color='#E0E0E0' rows={4} />
  </div>
));


stories.add('Pre', () => (
  <div className="ui segment">
    <pre>{`MATCH (n:Relate {name:"Project"})-[:BY]->(css:CSS)`}</pre>
  </div>
));


stories.add('Inline Code', () => (
  <div className="ui segment">
    <p>
      Here is some Cypher: <span className="code">{`MATCH (n:Relate {name:"Project"})-[:BY]->(css:CSS)`}</span>
    </p>
  </div>
));

stories.add('Code Block', () => (
  <div class="ui code message">
    <pre>
    {`CREATE (TheMatrix:Movie {title:'The Matrix', released:1999, tagline:'Welcome to the Real World'})
CREATE (Carrie:Person {name:'Carrie-Anne Moss', born:1967})
CREATE (Laurence:Person {name:'Laurence Fishburne', born:1961})
CREATE (Hugo:Person {name:'Hugo Weaving', born:1960})
CREATE (Keanu:Person {name:'Keanu Reeves', born:1964})`}
    </pre>
  </div>
))