import React from 'react';
import { shallow} from 'enzyme';
import BuyPolicy from '../components/BuyPolicy/BuyPolicy';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<BuyPolicy/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h3')).toHaveLength(1);
    });

    it('should render student id field', ()=> {
        expect(wrapper.find('#policyHolderName')).toHaveLength(1);
    });

    it('should render password field', ()=> {
        expect(wrapper.find('#gender')).toHaveLength(1);
    });
    it('should render password field', ()=> {
        expect(wrapper.find('#age')).toHaveLength(1);
    });
    it('should render password field', ()=> {
        expect(wrapper.find('#mobileNumber')).toHaveLength(1);
    });
    it('should render password field', ()=> {
        expect(wrapper.find('#city')).toHaveLength(1);
    });
    it('should render password field', ()=> {
        expect(wrapper.find('#nomineeName')).toHaveLength(1);
    });
    it('should render password field', ()=> {
        expect(wrapper.find('#relationship')).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#btn3')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().buyPolicy.policyHolderName).toEqual('');
        });
      });
      describe('when onChange event is not triggered on password field',()=>{
          it('should have empty state',()=>{
              expect(wrapper.state().buyPolicy.gender).toEqual('');
          });
      });
      describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().buyPolicy.age).toEqual('');
        });
    });
    describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().buyPolicy.mobileNumber).toEqual('');
        });
    });
    describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().buyPolicy.city).toEqual('');
        });
    });
    describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().buyPolicy.nomineeName).toEqual('');
        });
    });
    describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().buyPolicy.relationship).toEqual('');
        });
    });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const policyHolderName = wrapper.find('#policyHolderName');
          policyHolderName.simulate('change', { target: { name:'policyHolderName',value: 'divya' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().buyPolicy.policyHolderName).toEqual('divya');
        })
      });
    
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const gender = wrapper.find('#gender');
          gender.simulate('change', { target: {name:'gender', value: 'female' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().buyPolicy.gender).toEqual('female');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const birthDate = wrapper.find('#birthDate');
          birthDate.simulate('change', { target: {name:'birthDate', value: '12/02/2023' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().buyPolicy.birthDate).toEqual('12/02/2023');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const mobileNumber = wrapper.find('#mobileNumber');
          mobileNumber.simulate('change', { target: {name:'mobileNumber', value: '9876543211' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().buyPolicy.mobileNumber).toEqual('9876543211');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const city = wrapper.find('#city');
          city.simulate('change', { target: {name:'city', value: 'banglore' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().buyPolicy.city).toEqual('banglore');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const nomineeName = wrapper.find('#nomineeName');
          nomineeName.simulate('change', { target: {name:'nomineeName', value: 'vijaya' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().buyPolicy.nomineeName).toEqual('vijaya');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const relatioship = wrapper.find('#relatioship');
          relatioship.simulate('change', { target: {name:'relatioship', value: 'MOTHER' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().buyPolicy.relatioship).toEqual('MOTHER');
        })
      });
      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#policyHolderName').simulate('change', { target: {name:'policyHolderName', value: 'divya' } });
          wrapper.find('#gender').simulate('change', { target: { name:'gender',value: 'female' } });
          wrapper.find('#birthDate').simulate('change', { target: { name:'birthDate',value: '12/02/2023' } }); 
          wrapper.find('#mobileNumber').simulate('change', { target: { name:'mobileNumber',value: '9876543211' } });
          wrapper.find('#city').simulate('change', { target: { name:'city',value: 'banglore' } });
          wrapper.find('#nomineeName').simulate('change', { target: { name:'nomineeName',value: 'vijaya' } });
          wrapper.find('#relatioship').simulate('change', { target: { name:'relatioship',value: 'MOTHER' } });
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn1');
          submit.simulate('click', fakeEvent);
        });
    
        it('should have excepted userName', () => {
          expect(wrapper.state().buyPolicy.policyHolderName).toEqual('divya');
        });
    
        it('should have excepted Password', () => {
          expect(wrapper.state().buyPolicy.gender).toEqual('female');
        });
        it('should have excepted Password', () => {
            expect(wrapper.state().buyPolicy.birthDate).toEqual('12/02/2023');
          });
          it('should have excepted Password', () => {
            expect(wrapper.state().buyPolicy.mobileNumber).toEqual('9876543211');
          });
          it('should have excepted Password', () => {
            expect(wrapper.state().buyPolicy.city).toEqual('banglore');
          });
          it('should have excepted Password', () => {
            expect(wrapper.state().buyPolicy.nomineeName).toEqual('vijaya');
          });
          it('should have excepted Password', () => {
            expect(wrapper.state().buyPolicy.relatioship).toEqual('MOTHER');
          });
      });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<BuyPolicy />);
          const spy = jest.spyOn(comp.instance(), 'handleBuy');
          comp.instance().forceUpdate();
          comp.find('#btn3').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      
});