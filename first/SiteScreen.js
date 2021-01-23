import 'react-native-gesture-handler';
import * as React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Link
  } from 'react-native';


class SiteScreen extends React.Component {
    state = {
        sites: [],
    };

    async componentDidMount() {
        const sitesResponse = await fetch(`http://192.168.0.233:4000/sites/`);
        const siteJson = await sitesResponse.json();
        this.setState({ sites: siteJson });  
    }


    //return <Text>Siteee</Text>;
    render() {
        const { navigation } = this.props;

        return (
            <View>
            <Text>Sites</Text>

            {this.state.sites.map((site) => (
              <View key={site._id}>
                <Text>{site.name}</Text>
                <Button
                  title="Edit"
                  onPress={() => navigation.navigate('EditSite', {id: site._id})}
                />
              </View>
            ))}
        
            {this.state.sites.length == 0 &&
                <Text>No such any site in your account.</Text>
            }
                
            </View>
        )
  };
}
  
export default SiteScreen;






/*
const SiteList = ({ contacts }) => {
  return (
    <div>
      <h1>Sites</h1>
      <div><Link to='/Site/add/'>Add Site</Link></div>

      {contacts.map((contact) => (
        <div className="card" key={contact._id}>
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{contact.sitemap}</h6>
            <p className="card-text">{contact.regexpParagraph}</p>
            <p className="card-text">{contact.regexAuthor}</p>
            <p className="card-text">{contact._id}</p>
            <p className="card-text"><Link to={`/SiteEdit/${contact._id}`}>Edit</Link></p>
            <p className="card-text"><Link to={`/Site/delete/${contact._id}`}>Delete</Link></p>
          </div>
        </div>
      ))}

      {contacts.length == 0 &&
        <h2>No such any site in your account.</h2>
      }
        
    </div>
  )
};
*/


//export default SiteList
