import * as React from 'react';
import ReactDOM from 'react-dom';
import KendoTabstrip from '../src/tabstrip/Tabstrip';

const { Tab } = KendoTabstrip;

var Icon = React.createClass({
  render: function() {
      const imageUrl  = "http://demos.kendoui.com/content/shared/icons/sports/" + this.props.title.toLowerCase() + ".png";
      return (
        <div><img className="k-image" alt="" src={imageUrl} />{this.props.title}</div>
      ); 
  }
});

var Tabstrip = React.createClass({
      getInitialState: function() {
          return { selected : 0 }
      },
      onSelect: function(e) {
          this.setState({
              selected: e.selected
          })
      },
      render: function() {
        return (
           <KendoTabstrip onSelect={this.onSelect} selected={this.state.selected}>
            <Tab title={<Icon title="Baseball" />}>
                Baseball is a bat-and-ball sport played between two teams of nine players each. The aim is to score runs by hitting a thrown ball with a bat and touching a series of four bases arranged at the corners of a ninety-foot diamond. Players on the batting team take turns hitting against the pitcher of the fielding team, which tries to stop them from scoring runs by getting hitters out in any of several ways. A player on the batting team can stop at any of the bases and later advance via a teammate's hit or other means. The teams switch between batting and fielding whenever the fielding team records three outs. One turn at bat for each team constitutes an inning and nine innings make up a professional game. The team with the most runs at the end of the game wins.
            </Tab>
            <Tab title={<Icon title="Golf" />}>
                Golf is a precision club and ball sport, in which competing players (or golfers) use many types of clubs to hit balls into a series of holes on a golf course using the fewest number of strokes. It is one of the few ball games that does not require a standardized playing area. Instead, the game is played on golf courses, each of which features a unique design, although courses typically consist of either nine or 18 holes. Golf is defined, in the rules of golf, as playing a ball with a club from the teeing ground into the hole by a stroke or successive strokes in accordance with the Rules.
            </Tab>
            <Tab title={<Icon title="Swimming" />}>
                Swimming has been recorded since prehistoric times; the earliest recording of swimming dates back to Stone Age paintings from around 7,000 years ago. Written references date from 2000 BC. Some of the earliest references to swimming include the Gilgamesh, the Iliad, the Odyssey, the Bible, Beowulf, and other sagas. In 1578, Nikolaus Wynmann, a German professor of languages, wrote the first swimming book, The Swimmer or A Dialogue on the Art of Swimming (Der Schwimmer oder ein ZwiegesprÃ¤ch Ã¼ber die Schwimmkunst). Competitive swimming in Europe started around 1800, mostly using breaststroke.
            </Tab>
        </KendoTabstrip>
        )}
});
ReactDOM.render(
    <Tabstrip />,
    document.getElementById('app')
)