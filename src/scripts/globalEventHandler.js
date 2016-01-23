import Rx from 'rx';
import R from 'ramda';
import Immutable from 'immutable';

var types = {
	INITIALIZE_APP: 'INITIALIZE_APP',
	SHALLOW_MERGE:  'SHALLOW_MERGE'
};

var obsValue = Rx.Observable.just;

function getInitialAppState(initState) {
	return obsValue(initState);
}

function shallowMerge(update, lastState) {
	var newState = R.merge(lastState.toJS(), update);
	return obsValue(Immutable.Map(newState));
}

function eventDispatcher(msg, lastState) {
	var type = msg.type;
	var data = msg.data;

	var newStateObservable;
	
	switch(type) {
		case types.INITIALIZE_APP:
			newStateObservable = getInitialAppState(data, lastState);
			break;
		case types.SHALLOW_MERGE:
			newStateObservable = shallowMerge(data, lastState);
	}

	return newStateObservable;
}

function getEventHandler(initialState) {

	var applicationState = Immutable.Map({});
	var messageReceiver = new Rx.Subject();

	var push = (msg) => {
		if(!msg) { 
			throw 'bruh'; 
		}
		messageReceiver.onNext(msg);
	};

	var initializeMessage = {
		type: types.INITIALIZE_APP,
		data: initialState
	};

	var initialStateObservable = Rx.Observable.just(initializeMessage);

	var pushedMessagesObservable = initialStateObservable.merge(messageReceiver);

	var floodGate = pushedMessagesObservable.flatMap(msg => {
		return eventDispatcher(msg, applicationState);
	}).map(newState => {
		applicationState = newState;
		return applicationState;
	});

	return {
		push: push,
		types: types,
		floodGate: floodGate
	};
}

module.exports = getEventHandler;
