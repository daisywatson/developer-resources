import React, { Component } from 'react'
import ResourceList from '../ResourceList'
import NewItemForm from '../NewItemForm'
import EditItemForm from '../EditItemForm'


export default class ItemContainer extends Component {
  constructor(props) {
    super(props)

      this.state = {
        items: [],
        idOfItemToEdit: -1
      }
    }

    componentDidMount() {
      this.getItems().catch(() => console.log("ee"))
    }

    getItems = async () => {
      try {
        const url = process.env.REACT_APP_API_URL + "/api/v1/resources/"
        const itemsResponse = await fetch(url, {method: 'get', credentials: 'include'})
        const itemsJson = await itemsResponse.json()
        console.log(itemsJson)

        this.setState({
          items: itemsJson.data
        })

      } catch(err) {
        console.log("Error getting item data", err)
      }
    }


    deleteItem = async (idOfItemToDelete) => {
      try {
        const url = process.env.REACT_APP_API_URL + "/api/v1/resources/" + idOfItemToDelete

        const deleteItemResponse = await fetch(url, {
          method: 'DELETE',
          credentials: 'include'
        })

        const deleteItemJson = await deleteItemResponse.json()
        console.log("deleteItemJson", deleteItemJson)

        if(deleteItemResponse.status === 200) {
          this.setState({
            items: this.state.items.filter(item => item.id !== idOfItemToDelete)
          })
        }
      } catch(err) {
        console.log("Error deleting item", err)
      }
    }


    createItem = async (itemToAdd) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/resources/"
      const createItemResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(itemToAdd)
      })
      const createItemJson = await createItemResponse.json()

      if(createItemResponse.status === 201 || createItemResponse.status === 200){
        this.setState({
          items: [...this.state.items, createItemJson.data]
        })
      }
    } catch(err) {
      console.log("Error adding item", err)
    }
  }

  editItem = (idOfItemToEdit) => {
    console.log("you are trying to edit item with id: ", idOfItemToEdit)

    this.setState({
      idOfItemToEdit: idOfItemToEdit
    })
  }

  updateItem = async (updatedItemInfo) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/resources/" + this.state.idOfItemToEdit

      const updateItemResponse = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(updatedItemInfo),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log("updateItemResponse", updateItemResponse)
      const updateItemJson = await updateItemResponse.json()
      console.log("updateItemJson", updateItemJson)

      if(updateItemResponse.status === 200) {
        const items = this.state.items
        const indexOfItemBeingUpdated = items.findIndex(item => item.id === this.state.idOfItemToEdit)
        items[indexOfItemBeingUpdated] = updateItemJson.data
        this.setState({
          items: items,
          idOfItemToEdit: -1
        })
      }

    } catch(err) {
      console.log("Error updating item info: ", err)
    }
  }



 logout = async () => {
   const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout"
   const logoutResponse = await fetch(url, {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json'
     },
     credentials: 'include',
   })
   localStorage.setItem('active', null)
   this.props.history.push('/login')
 }

 render() {
   return (
     <div className="itemContainer">
        <button onClick={() => this.logout()}>Logout</button>
        <br/>
        <h1>Developer Resource Site</h1>
        <h3>My Resource List:</h3>
        <NewItemForm createItem={this.createItem} />
        <ResourceList
          items={this.state.items}
          editItem={this.editItem}
          deleteItem={this.deleteItem}
        />
        {
          this.state.idOfItemToEdit !== -1
          &&
          <EditItemForm
            itemToEdit={this.state.items.find((item) => item.id === this.state.idOfItemToEdit)}
            updateItem={this.updateItem}
          />
        }
     </div>
  )
 }
}
