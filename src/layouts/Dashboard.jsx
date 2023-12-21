import React from 'react'
import Categories from './Categories';
import ProductList from '../pages/ProductList';
import { Grid, GridColumn, GridRow, Image } from 'semantic-ui-react'

//import { Button, Icon, Label } from 'semantic-ui-react'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={6}>
             <Categories></Categories>
          </GridColumn>
          <GridColumn width={10}>
            <ProductList></ProductList>
          </GridColumn>
        </GridRow>
      </Grid>
     
    </div>
    // <div>
    //     <Button as='div' labelPosition='right'>
    //   <Button color='red'>
    //     <Icon name='heart' />
    //     Like
    //   </Button>
    //   <Label as='a' basic color='red' pointing='left'>
    //     2,048
    //   </Label>
    // </Button>
    // <Button as='div' labelPosition='right'>
    //   <Button basic color='blue'>
    //     <Icon name='fork' />
    //     Fork
    //   </Button>
    //   <Label as='a' basic color='blue' pointing='left'>
    //     2,048
    //   </Label>
    // </Button>
    //</div>
  );
}
