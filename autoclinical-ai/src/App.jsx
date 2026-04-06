import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Overview from './pages/Overview/Overview';
import Dashboard from './pages/Dashboard/Dashboard';
import UploadReport from './pages/UploadReport/UploadReport';
import Processing from './pages/Processing/Processing';
import AnalysisResults from './pages/AnalysisResults/AnalysisResults';
import History from './pages/History/History';
import CompareReports from './pages/CompareReports/CompareReports';
import Insights from './pages/Insights/Insights';
import Chatbot from './pages/Chatbot/Chatbot';
import Settings from './pages/Settings/Settings';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Overview} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/upload" component={UploadReport} />
                <Route path="/processing" component={Processing} />
                <Route path="/results" component={AnalysisResults} />
                <Route path="/history" component={History} />
                <Route path="/compare" component={CompareReports} />
                <Route path="/insights" component={Insights} />
                <Route path="/chatbot" component={Chatbot} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </Router>
    );
};

export default App;

