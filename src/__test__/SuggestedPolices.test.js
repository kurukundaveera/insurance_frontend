import React from 'react';
import {shallow,mount} from 'enzyme';
import SuggestedPolicies from '../components/ListOfPolicies/SuggestedPolicies';

describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = mount(<SuggestedPolicies/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });
    if('should render table element',()=>{
      expect(wrapper.find('table')).toHaveLength(1);
    });
    if('should render table element',()=>{
        expect(wrapper.find('tbody')).toHaveLength(1);
      });
      if('should render table element',()=>{
        expect(wrapper.find('thead')).toHaveLength(1);
      });
    it('should render button element',()=>{
        expect(wrapper.find('#btn1')).toHaveLength(0);
    });
    
    it('should render h1 tag',()=>{
        expect(wrapper.find('h5')).toHaveLength(1);
    })
    describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<SuggestedPolicies/>);
          const spy = jest.spyOn(comp.instance(), 'handlePolicyDetails');
          comp.instance().forceUpdate();
          comp.find('#btn4').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
   
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<SuggestedPolicies/>);
          const spy = jest.spyOn(comp.instance(), 'handleBuyPolicy');
          comp.instance().forceUpdate();
          comp.find('#btn5').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<SuggestedPolicies/>);
          const spy = jest.spyOn(comp.instance(), 'cancel');
          comp.instance().forceUpdate();
          comp.find('#btn5').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
    
    
      describe('when account summary is ',()=>{
        const listPolices=[
          {
            policyName:"lic",
            policyMinAge:"12/08/2020",
            policyMaxAge:"08/23/2023",
            policyPrice:1000000
          },
          {
            policyName:"lic",
            policyMinAge:"12/08/2020",
            policyMaxAge:"08/23/2023",
            policyPrice:1000000
          },
          {
            policyName:"lic",
            policyMinAge:"12/08/2020",
            policyMaxAge:"08/23/2023",
            policyPrice:1000000
          },
        ]
        beforeEach(()=>{
          wrapper=shallow(<SuggestedPolicies listPolices={listPolices} />)
        });
        it('should renderlist of accounts for a user',()=>{
          const table=wrapper.find('table');
          const tbody=table.find('tbody');
          const tr=tbody.find('tr');
          expect(tr.length=3).toBe(3);
        });
      });
      describe('when the account summary is empty',()=>{
       const emptyArray=[];
       beforeEach(()=>{
         wrapper=shallow(<SuggestedPolicies listPolices={emptyArray}/>);
       });
       it('should not display account row data',()=>{
         const table=wrapper.find('table');
         const tbody=table.find('tbody');
         const tr= tbody.find('tr');
         expect(tr.length).toBe(0)
       });

      });


  
});