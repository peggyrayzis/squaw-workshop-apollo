// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Image,
  CodePane,
  Deck,
  Slide,
  Text,
  List,
  ListItem,
  Link,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images, Code samples
import images from './images';
import code from './code';

// Require CSS
require('normalize.css');

export const textColor = {
  primary: '#3a3c4b',
  secondary: '#f7f7f8',
  tertiary: '#8b86e3',
  quartenary: '#f5a0a4',
};

const theme = createTheme(textColor, {
  primary: { name: 'Khula', googleFont: true, styles: ['300', '800'] },
  secondary: 'Helvetica',
});

export const textSize = {
  large: '5.5em',
  medium: '3.5em',
  small: '2em',
  extraSmall: '1.3em',
};

export const slideProps = {
  maxWidth: 1300,
  transition: ['fade'],
  bgColor: 'primary',
};

export const Title = ({
  children,
  textColor = 'secondary',
  textSize = '3.5em',
  lineHeight = 1,
  style,
}) => (
  <Text
    margin="0px"
    bold
    lineHeight={lineHeight}
    textColor={textColor}
    textSize={textSize}
    style={style}
  >
    {children}
  </Text>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        progress="none"
        contentWidth={1300}
      >
        <Slide
          maxWidth={1300}
          transition={['fade']}
          bgImage={images.peggy}
          align="center flex-start"
        >
          <Text
            margin="50px"
            bold
            lineHeight={1}
            textColor="secondary"
            textSize={textSize.medium}
          >
            Hi Tahoe! 🙋
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '50px',
            }}
          >
            <Image
              src={images.peggyIcon}
              width="370px"
              height="370px"
              margin="0px"
              style={{ borderRadius: '50%' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Text
                margin="40px 0px 0px 0px"
                bold
                lineHeight={1}
                textColor="secondary"
                textSize="2.7em"
              >
                @peggyrayzis
              </Text>
              <Image
                margin="10px 0px 0px -35px"
                src={images.apollo}
                width="550px"
              />
            </div>
          </div>
        </Slide>
        <Slide {...slideProps}>
          <Title textSize="3em">
            apollo-link-state:<br />
            <span style={{ color: textColor.tertiary }}>
              Local state management<br />with Apollo Client
            </span>
          </Title>
        </Slide>
        <Slide {...slideProps}>
          <Title textSize={textSize.small}>
            2017: Separate stores, no cohesion
          </Title>
          <Image src={images.acOld} height="600px" />
        </Slide>
        <Slide {...slideProps}>
          <Title textSize={textSize.small}>
            2018: One unified interface for all data
          </Title>
          <Image src={images.acNew} width="1300px" />
        </Slide>
        <Slide {...slideProps}>
          <Title textSize={textSize.small} textColor="tertiary">
            Write local data with ApolloConsumer
          </Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1em"
            source={code.simpleWrite}
          />
        </Slide>
        <Slide {...slideProps}>
          <Title textSize={textSize.small} textColor="tertiary">
            Query local data with @client
          </Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1em"
            source={code.simpleRead}
          />
        </Slide>
        <Slide {...slideProps}>
          <Title textSize={textSize.small} textColor="tertiary">
            Included with Apollo Boost 🙌
          </Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1em"
            source={code.boost}
          />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Title textColor="tertiary" textSize={textSize.small}>
            Learn more about apollo-link-state!
          </Title>
          <Image src={images.links} margin="0px" width="1200px" />
          <List style={{ display: 'inline-block' }}>
            {[
              {
                name: 'Apollo essentials guide',
                link:
                  'https://www.apollographql.com/docs/react/essentials/local-state.html',
              },
              {
                name: 'Video by Sara Vieira',
                link:
                  'https://www.youtube.com/watch?v=2RvRcnD8wHY&feature=youtu.be',
              },
              {
                name: 'Example app',
                link:
                  'https://codesandbox.io/s/github/apollographql/apollo-link-state/tree/master/examples/todo',
              },
            ].map(item => (
              <ListItem key={item.name} bold textSize="2.5em">
                <Link textColor={textColor.secondary} href={item.link}>
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Title textSize="3em">
            What's next:<br />
            <span style={{ color: textColor.tertiary }}>
              Delay/load for Query components
            </span>
          </Title>
        </Slide>
        <Slide {...slideProps}>
          <Title textSize={textSize.small} textColor="tertiary">
            Prefetch data with delay/load
          </Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1em"
            source={code.delay}
          />
        </Slide>
        <Slide {...slideProps}>
          <Title textSize="3em">
            What's next:<br />
            <span style={{ color: textColor.tertiary }}>
              Easier cache updates
            </span>
          </Title>
        </Slide>
        <Slide {...slideProps}>
          <Title textSize={textSize.small} textColor="tertiary">
            cache.updateQuery
          </Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1em"
            source={code.after}
          />
        </Slide>
        <Slide
          maxWidth={1300}
          transition={['fade']}
          bgImage={images.peggy2}
          align="center flex-start"
        >
          <Text
            margin="50px 0px 0px 0px"
            bold
            lineHeight={1}
            textColor="primary"
            textSize={textSize.medium}
          >
            Q&A 🎉
          </Text>
          <Text
            bold
            lineHeight={1}
            textColor="primary"
            textSize={textSize.small}
          >
            @peggyrayzis
          </Text>
        </Slide>
      </Deck>
    );
  }
}
