import React, { useState } from 'react'
import { CalendarIcon, Globe, Trash2, Smartphone } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
interface Asset {
  id: string
  type: 'WEB' | 'MOBILE'
  identifier: string
  description: string
  bountyEligibility: 'ELIGIBLE' | 'INELIGIBLE'
}
interface CreateProgramModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (program: {
    name: string
    startDate: string
    website?: string
    twitter?: string
    assets: Asset[]
  }) => void
}
export function CreateProgramModal({
  isOpen,
  onOpenChange,
  onSubmit,
}: CreateProgramModalProps) {
  const [programName, setProgramName] = useState('')
  const [startDate, setStartDate] = useState<Date>()
  const [website, setWebsite] = useState('')
  const [twitter, setTwitter] = useState('')
  const [assetType, setAssetType] = useState<'WEB' | 'MOBILE' | ''>('')
  const [assetIdentifier, setAssetIdentifier] = useState('')
  const [assetDescription, setAssetDescription] = useState('')
  const [bountyEligibility, setBountyEligibility] = useState<
    'ELIGIBLE' | 'INELIGIBLE' | ''
  >('')
  const [assets, setAssets] = useState<Asset[]>([])
  const handleAddAsset = () => {
    if (
      !assetType ||
      !assetIdentifier ||
      !assetDescription ||
      !bountyEligibility
    ) {
      return
    }
    // Check for duplicate asset identifier
    if (assets.some((asset) => asset.identifier === assetIdentifier)) {
      return
    }
    const newAsset: Asset = {
      id: Date.now().toString(),
      type: assetType as 'WEB' | 'MOBILE',
      identifier: assetIdentifier,
      description: assetDescription,
      bountyEligibility: bountyEligibility as 'ELIGIBLE' | 'INELIGIBLE',
    }
    setAssets([...assets, newAsset])
    // Reset form fields
    setAssetType('')
    setAssetIdentifier('')
    setAssetDescription('')
    setBountyEligibility('')
  }
  const handleDeleteAsset = (id: string) => {
    setAssets(assets.filter((asset) => asset.id !== id))
  }
  const handleSubmit = () => {
    if (!programName || !startDate || assets.length === 0) {
      return
    }
    onSubmit({
      name: programName,
      startDate: format(startDate, 'dd/MM/yyyy'),
      website,
      twitter,
      assets,
    })
    // Reset form
    setProgramName('')
    setStartDate(undefined)
    setWebsite('')
    setTwitter('')
    setAssets([])
    onOpenChange(false)
  }
  // Handle date selection
  const handleSelectDate = (date: Date | undefined) => {
    setStartDate(date)
  }
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create Program</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Program Name <span className="text-red-500">*</span>
              </label>
              <Input
                value={programName}
                onChange={(e) => setProgramName(e.target.value)}
                placeholder="Enter program name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Start Date <span className="text-red-500">*</span>
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !startDate && 'text-muted-foreground'
                    )}
                  >
                    
                    {startDate ? format(startDate, 'PPP') : <span>Pick a date</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end">
                <h4 className="leading-none font-medium">Finalize Start Date</h4>
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={handleSelectDate}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Website</label>
              <Input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter Your Website"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Twitter / X
              </label>
              <Input
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                placeholder="Enter @Username"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Asset You Want to Test
            </label>
            <Select
              value={assetType}
              onValueChange={(value: 'WEB' | 'MOBILE') => setAssetType(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="WEB">
                  <div className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Web
                  </div>
                </SelectItem>
                <SelectItem value="MOBILE">
                  <div className="flex items-center">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Mobile App
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Asset Identifier
            </label>
            <Input
              value={assetIdentifier}
              onChange={(e) => setAssetIdentifier(e.target.value)}
              placeholder="Write your asset Identifier"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <Input
              value={assetDescription}
              onChange={(e) => setAssetDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Bounty Eligibility
              </label>
              <Select
                value={bountyEligibility}
                onValueChange={(value: 'ELIGIBLE' | 'INELIGIBLE') =>
                  setBountyEligibility(value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ELIGIBLE">Eligible</SelectItem>
                  <SelectItem value="INELIGIBLE">Ineligible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              variant="default"
              onClick={handleAddAsset}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Add
            </Button>
          </div>
          {assets.length > 0 && (
            <div>
              <table className="w-full mt-4">
                <thead>
                  <tr className="border-b text-xs text-gray-500 uppercase">
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Asset Identifier</th>
                    <th className="text-left py-2">Description</th>
                    <th className="text-left py-2">Bounty</th>
                    <th className="text-right py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset) => (
                    <tr key={asset.id} className="border-b">
                      <td className="py-3">
                        <div className="flex items-center">
                          {asset.type === 'WEB' ? (
                            <Globe className="h-4 w-4 text-gray-500" />
                          ) : (
                            <span className="h-4 w-4 flex items-center justify-center bg-gray-200 rounded-full">
                              <span className="text-xs">M</span>
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3">
                        <span className="text-sm text-purple-600">
                          {asset.identifier}
                        </span>
                      </td>
                      <td className="py-3">
                        <span className="text-sm text-gray-600">
                          {asset.description}
                        </span>
                      </td>
                      <td className="py-3">
                        <Badge
                          variant={
                            asset.bountyEligibility === 'ELIGIBLE'
                              ? 'success'
                              : 'error'
                          }
                        >
                          {asset.bountyEligibility === 'ELIGIBLE'
                            ? 'Eligible'
                            : 'Ineligible'}
                        </Badge>
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => handleDeleteAsset(asset.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <DialogFooter className="flex justify-between sm:justify-between mt-6">
          <DialogClose asChild>
            <Button
              variant="secondary"
              className="bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="default"
            onClick={handleSubmit}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
