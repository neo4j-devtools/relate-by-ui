import React from 'react';

import { storiesOf } from '@storybook/react';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import * as faker from "faker";

const typeStories = storiesOf('Element/Placeholder/Types', module);

typeStories.add('Placeholder', () => (
  <div className="ui segments">
    <div class="ui segment">
      <div class="ui placeholder">
        <div class="image header">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="paragraph">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      </div>
      <div class="ui hidden divider"></div>
      <div class="ui segment">
      <div class="ui three column stackable grid">
        <div class="column">
          <div class="ui raised segment">
            <div class="ui placeholder">
              <div class="image header">
                <div class="line"></div>
                <div class="line"></div>
              </div>
              <div class="paragraph">
                <div class="medium line"></div>
                <div class="short line"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui raised segment">
            <div class="ui placeholder">
              <div class="image header">
                <div class="line"></div>
                <div class="line"></div>
              </div>
              <div class="paragraph">
                <div class="medium line"></div>
                <div class="short line"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui raised segment">
            <div class="ui placeholder">
              <div class="image header">
                <div class="line"></div>
                <div class="line"></div>
              </div>
              <div class="paragraph">
                <div class="medium line"></div>
                <div class="short line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui hidden divider"></div>
      <div className="ui segment">
        <div class="ui three doubling stackable cards">
          <div class="ui card">
            <div class="image">
              <div class="ui placeholder">
                <div class="square image"></div>
              </div>
            </div>
            <div class="content">
              <div class="ui placeholder">
                <div class="header">
                  <div class="very short line"></div>
                  <div class="medium line"></div>
                </div>
                <div class="paragraph">
                  <div class="short line"></div>
                </div>
              </div>
            </div>
            <div class="extra content">
              <div class="ui disabled primary button">Add</div>
              <div class="ui disabled button">Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));



const contentStories = storiesOf('Element/Placeholder/Content', module);


contentStories.add('Lines', () => (
  <div className="ui segment">
    <div class="ui placeholder">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
));

contentStories.add('Headers', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui placeholder">
        <div class="image header">
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui placeholder">
        <div class="header">
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
));


contentStories.add('Paragraph', () => (
  <div className="ui segment">
    <div class="ui placeholder">
      <div class="paragraph">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="paragraph">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
));


contentStories.add('Image', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui placeholder">
        <div class="image"></div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui three cards">
        <div class="ui card">
          <div class="content">
            <div class="ui placeholder">
              <div class="square image"></div>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <div class="ui placeholder">
              <div class="square image"></div>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <div class="ui placeholder">
              <div class="square image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div classname="ui segment">
      <div class="ui three cards">
        <div class="ui card">
          <div class="content">
            <div class="ui placeholder">
              <div class="rectangular image"></div>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <div class="ui placeholder">
              <div class="rectangular image"></div>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <div class="ui placeholder">
              <div class="rectangular image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));



const variationStories = storiesOf('Element/Placeholder/Variations', module);


variationStories.add('Line Length', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui placeholder">
        <div class="full line"></div>
        <div class="very long line"></div>
        <div class="long line"></div>
        <div class="medium line"></div>
        <div class="short line"></div>
        <div class="very short line"></div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui placeholder">
        <div class="image header">
          <div class="medium line"></div>
          <div class="full line"></div>
        </div>
        <div class="paragraph">
          <div class="full line"></div>
          <div class="medium line"></div>
        </div>
      </div>
    </div>
  </div>
));


variationStories.add('Fluid', () => (
  <div className="ui segment">
    <div class="ui fluid placeholder">
      <div class="image header">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="paragraph">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
));


variationStories.add('Inverted', () => (
  <div className="ui segment">
    <div class="ui inverted segment">
      <div class="ui active inverted placeholder">
        <div class="image header">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="paragraph">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
));

