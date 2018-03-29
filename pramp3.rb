func findLargestSmallerKey(rootNode: Node, num: Int) -> Int {
  let rootValue = rootNode.value
  // 2 <= 20
  if num <= rootValue {
    if let leftChild = rootNode.left {
      return findLargestSmallerKey(rootNode: leftChild, num: num)
    } else {
      if let parent = rootNode.parent {
        let isLeft = (parent.left!.value == rootNode.value)
        return isLeft ? -1 : parent.value
      } else {
        return -1
      }
    }
  } else {
    if let rightChild = rootNode.right {
      return findLargestSmallerKey(rootNode: rightChild, num: num)
    } else {
      return rootValue
    }
  }

}


def find_grants_cap(grantsArray, newBudget)
  # your code goes here
  sortedArr = grantsArray.sort
  cap = sortedArr.first # 2
  temp_sum = 0
  previous_caps = 0
  idx = 0
  while idx < grantsArray.length
    temp_sum = previous_caps + cap*(sortedArr.length-idx) # 10
    previous_caps += cap
    if temp_sum < newBudget
       idx += 1
       cap = sortedArr[idx]
    elsif temp_sum >= newBudget
       break
    end
  end
  diff = temp_sum - newBudget
  if diff == 0
    cap
  else
    cap - (diff/(sortedArr.length-idx).to_f) # 47
  end

end

# 2 50 100 120 1000
# cap = 2
# temp 0
# prev 0
# idx 0

# temp => 10
# prev 2
# idx 1
# cap 50
# 2 + 50* 40 => 202
# prev => 52
# break
# diff = 202 -190 => 12
# 50 - (12/5-1) => 47

# 2, 50 100, 120 1000
# 190
# 190 - 2 = > 188
# 188 - 50 = > 138
#

# 2, 50 100, 120 1000 cap 2
# 2, 50, 50, 50, 50  = > 202
# 202-190 => 12
# 4 elements at the cap => 12/4 => 3
# 50-3 => 47

# 2, 50, 100, 120, 1000
# cap = 2
# 2, 2, 2, 2, 2
# idx = 0
# 2*5 = 10
# idx = 1
# cap => 50
# 2, 50*4 => 202


QUESTION
Award Budget Cuts
The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

Analyze the time and space complexities of your solution.

Example:

input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
Constraints:

[time limit] 5000ms

[input] array.double grantsArray

0 ≤ grantsArray.length ≤ 20
0 ≤ grantsArray[i]
[input] double newBudget

[output] double
