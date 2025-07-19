import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, DollarSign, Search, Filter } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function VacanciesPage() {
  const jobVacancies = [
    {
      id: 1,
      title: "Night Shift Security Guard",
      location: "Delhi",
      shift: "10 PM - 6 AM",
      salary: "₹18,000 - ₹22,000",
      type: "Full-time",
      experience: "1-2 years",
      requirements: ["Valid Security License", "Physical Fitness", "Good Communication"],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Female Security Guard",
      location: "Bangalore",
      shift: "Day Shift",
      salary: "₹16,000 - ₹20,000",
      type: "Full-time",
      experience: "0-1 years",
      requirements: ["Female Candidate", "Basic Education", "Alert & Responsible"],
      posted: "1 day ago",
    },
    {
      id: 3,
      title: "Event Security Officer",
      location: "Mumbai",
      shift: "Flexible",
      salary: "₹20,000 - ₹25,000",
      type: "Contract",
      experience: "2-3 years",
      requirements: ["Event Security Experience", "Crowd Management", "Team Leadership"],
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "Commercial Security Supervisor",
      location: "Gurgaon",
      shift: "Day Shift",
      salary: "₹25,000 - ₹30,000",
      type: "Full-time",
      experience: "3-5 years",
      requirements: ["Supervisory Experience", "CCTV Monitoring", "Report Writing"],
      posted: "1 week ago",
    },
    {
      id: 5,
      title: "Residential Security Guard",
      location: "Pune",
      shift: "12 Hour Shift",
      salary: "₹15,000 - ₹18,000",
      type: "Full-time",
      experience: "0-2 years",
      requirements: ["Residential Experience", "Good Behavior", "Local Language"],
      posted: "4 days ago",
    },
    {
      id: 6,
      title: "Mall Security Officer",
      location: "Chennai",
      shift: "Day Shift",
      salary: "₹17,000 - ₹21,000",
      type: "Full-time",
      experience: "1-3 years",
      requirements: ["Retail Security", "Customer Service", "Emergency Response"],
      posted: "5 days ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect security guard position with SwiftSecure. We offer competitive salaries and growth
            opportunities.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search jobs..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="gurgaon">Gurgaon</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-violet-600 hover:bg-violet-700">
              <Filter className="h-4 w-4 mr-2" />
              Filter Jobs
            </Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {jobVacancies.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">{job.title}</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.shift}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className="bg-green-100 text-green-800">Open</Badge>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Experience:</span> {job.experience} • Posted {job.posted}
                    </div>
                    <Link href="/apply">
                      <Button className="bg-violet-600 hover:bg-violet-700">Apply Now</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Jobs
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
