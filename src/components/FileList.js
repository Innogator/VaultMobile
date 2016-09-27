import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';
import FileItem from './FileItem';
import ActionMenu from './ActionMenu';
import { GetFileList } from '../data/dataRequests';

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
    let data = [
        {"id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
        {"id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
        {"id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
        {"id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"File"},
    ]

    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }

  static propTypes = {
    selectedId: React.PropTypes.string,
  }

  componentWillMount () {
    this._refreshData();
  }

  _renderRow (rowData) {
    console.log(rowData);
    return (
      <FileItem name={rowData.name}
              updatedDate={rowData.modifiedTime}
              author={rowData.type}
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
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});    
    let data = GetFileList(this.props.selectedId);

    this.setState = ({
      dataSource: ds.cloneWithRows(data)
    })
  }

  render () {
    return (
      <View>
        <ListView contentContainerStyle={styles.container}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
        />
        <ActionMenu />
      </View>
    );
  }
}

export default FileList;
