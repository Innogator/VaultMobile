import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';
import FileItem from './FileItem';
import { GetFileList } from '../data/dataRequests';

class FileList extends Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //let data = GetFileList(this.props.selectedId);

    let data = [];

    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
  }

  static propTypes = {
    activeTab: React.PropTypes.string,
    activeItem: React.PropTypes.string,
    onItemSelected: React.PropTypes.func,
  }

  componentWillReceiveProps() {
    this._refreshData();
  }

  _renderRow (rowData) {
    let icon = rowData.type === 'Folder' ? 'folder' : 'insert-drive-file'

    return (
        <FileItem name={rowData.name}
                updatedDate={rowData.modifiedTime}
                author={rowData.type}
                icon={icon}
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

  renderSeparator (
    sectionID: number | string,
    rowID: number | string,
    adjacentRowHighlighted: boolean
  ) {
    var style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
      <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
    );
  }

  _refreshData () {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //let data = GetFileList(this.props.activeItem);
    console.log("tab: " + this.props.activeTab);
    console.log("id: " + this.props.activeItem);
    let data = [
          {"name": "Folder A", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "Folder B", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "Folder C", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "File D", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"File"},
    ];
    //if (this.props.activeItem !== 'firm')
    if (this.props.activeTab !== 'firm')
    {
      data = [
          {"name": "Folder E", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "Folder F", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "Folder G", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "Folder H", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"File"},
          {"name": "Folder I", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "Folder J", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "Folder K", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "Folder L", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"File"},
          {"name": "Folder M", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "Folder N", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "Folder O", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"Folder"},
          {"name": "Folder P", "id":"f9f0bb50817c11e6ac0f34e6d714f88c","createdTime":"0001-01-01T00:00:00+00:00","modifiedTime":"0001-01-01T00:00:00+00:00","type":"File"},
      ]
    }

    this.setState({
      dataSource: ds.cloneWithRows(data)
    })
  }

  render () {
    return (
      <View>
        <View style={styles.listContainer}>
          <ListView contentContainerStyle={styles.container}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
              renderSeparator={this._renderSeparator}
              enableEmptySections
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
  headingText: {
    flex: 1,
    fontSize: 24,
    alignSelf: 'center',
  },
  actionContainer: {
  },
  listContainer: {
    flex: 1,
  },
});

export default FileList;
