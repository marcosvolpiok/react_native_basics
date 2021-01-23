import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Link,
    TextInput
  } from 'react-native';


class EditSite extends React.Component {
    state = {
        site: [],
        //id: this.props.match.params.id,
        id: null,
        name: null,
        sitemap: null,
        regexpParagraph: null,
        regexAuthor: null
    };

    constructor(props) {
      super(props);



      this.handleChange = this.handleChange.bind(this);
    }




      handleChange(text) {
        const name = name;
        console.log('name:::' + name, 'text::: ' +  text);
        this.setState({
            [name]: text
        });
      }
      
    
    async componentDidMount() {
      const { route } = this.props; 
      const { id } = route.params;
      await this.setState({
        id: id
      });
      console.log('iddddddddd', id);


      fetch(`http://192.168.0.233:4000/sites/${id}`)
      .then(res => res.json())
      .then((data) => {
        console.log('DATA SITIO ESPECIFICO', data);
        this.setState({ site: data })
        this.setState({
          name: data.name,
          sitemap: data.sitemap
      });
      })
      .catch(console.log('errorrr'))
      
  }

    async handleClick () {
      console.log('Submit!... ', this.state);
      
      const response = await fetch(`http://192.168.0.233:4000/sites/update/${this.state.id}`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: this.state.name,
              sitemap: this.state.sitemap,
              regexpParagraph: this.state.regexpParagraph,
              regexAuthor: this.state.regexAuthor
          }) 
          // body data type must match "Content-Type" header
      });
      
    }

    //return <Text>Siteee</Text>;
    render() {
        const { navigation } = this.props; 
        //const [text, setText] = useState('');

        return (
            <View>
            <Text>Site</Text>

            {this.state.site.map((s) => (
              <View key={s._id}>
                <TextInput
                placeholder="Name"
                defaultValue={s.name}
                onChangeText={(name) => this.setState({name})}   
                ></TextInput>

                <TextInput
                placeholder="Sitemap"
                defaultValue={s.sitemap}
                onChangeText={(sitemap) => this.setState({sitemap})}  
                ></TextInput>


                <TextInput
                placeholder="regexpParagraph"
                defaultValue={s.regexpParagraph}
                onChangeText={(regexpParagraph) => this.setState({regexpParagraph})}  
                ></TextInput>


                <TextInput
                placeholder="regexAuthor"
                defaultValue={s.regexAuthor}
                onChangeText={(regexAuthor) => this.setState({regexAuthor})}  
                ></TextInput>


                <Button
                  title="Submit"
                  onPress={() => this.handleClick()}
                />
              </View>
            ))}
        
            {this.state.site.length == 0 &&
                <Text>No such any site in your account.</Text>
            }
                
            </View>
        )
  };
}
  
export default EditSite;