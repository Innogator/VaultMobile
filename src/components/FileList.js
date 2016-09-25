import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';
import FileItem from './FileItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 24
  },
  list: {
    flex: 1,
    flexDirection: 'row'
  },
  listContent: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  },
  sectionDivider: {
    padding: 8,
    backgroundColor: '#EEEEEE',
    alignItems: 'center'
  },
  headingText: {
    flex: 1,
    fontSize: 24,
    alignSelf: 'center'
  }
});

class FileList extends Component {
  constructor () {
    super();

    // TODO: set datasource
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let data = {

      'firmFiles': [
        {
          'name': 'name',
          'size': 'size',
          'author': 'author',
          'createdDate': 'createdDate',
          'url': 'url',
          'icon': 'icon'
        },
        {
          'name': 'name2',
          'size': 'size2',
          'author': 'author2',
          'createdDate': 'createdDate2',
          'url': 'url2',
          'icon': 'icon2'
        },
      ]
    }

    this.state = {
      dataSource: ds.cloneWithRows(data.firmFiles)
    }
  }

  componentDidMount () {
    this._refreshData();
  }

  _renderRow (rowData) {
    console.log(rowData);
    return (
      <FileItem name={rowData.name}
              url={rowData.url}
              author={rowData.author}
            />
    )
  }

  _renderHeader () {
    return (
      <View style={styles.sectionDivider}>
        <Text style={styles.headingText}>
          Files
        </Text>
      </View>
    )
  }

  _renderFooter () {
    return (
      <View style={styles.sectionDivider}>
        <Text>Footer if needed</Text>
      </View>
    )
  }

  _refreshData () {
    // TODO: fetch data here
  }

  render () {
    return (
      <ListView style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderHeader={this._renderHeader}
          renderFooter={this._renderFooter}
      />
    );
  }
}

export default FileList;
